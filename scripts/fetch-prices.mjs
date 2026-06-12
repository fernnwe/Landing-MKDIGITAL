import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const EXCHANGE_RATE = 36.5;
const TIENDA_URL = 'https://softkeypc.com/tienda/';
const OUTPUT = resolve(__dirname, '..', 'src', 'data', 'prices.ts');

const markupForPrice = (usd) => {
  if (usd < 30) return 5;
  if (usd < 100) return 7;
  return 8;
};

const PRODUCT_MAP = [
  { match: /windows\s*10\s*(pro|professional)(?!.*(?:home|retail))/i, id: 'win10', label: 'Windows 10 Pro' },
  { match: /windows\s*11\s*(pro|professional)(?!.*(?:home|retail))/i, id: 'win11', label: 'Windows 11 Pro' },
  { match: /office\s*2024\s*(pro|professional)\s*plus(?:\s+ltsc)?(?:\s+standard)?(?!.*(?:phone|500pc|1pc))/i, id: 'office2024', label: 'Office 2024 Pro Plus' },
  { match: /office\s*2021\s*(pro|professional)\s*plus(?:\s+ltsc)?(?!.*(?:phone|bind|500pc|5pc))/i, id: 'office2021', label: 'Office 2021 Pro Plus' },
  { match: /adobe\s*creative\s*cloud[^]*?12\s*mese/i, id: 'creativecloud', label: 'Adobe CC 12 meses' },
  { match: /adobe\s*acrobat\s*pro\s*2020/i, id: 'acrobat', label: 'Adobe Acrobat Pro 2020' },
  { match: /autocad\s*2024/i, id: 'autocad', label: 'AutoCAD 2024' },
  { match: /avast\s*premium\s*security/i, id: 'avast', label: 'Avast Premium Security' },
  { match: /eset\s*(nod32|internet\s*security)(?!\s*smart)/i, id: 'eset', label: 'ESET NOD32' },
  { match: /kaspersky/i, id: 'kaspersky', label: 'Kaspersky' },
  { match: /mcafee/i, id: 'mcafee', label: 'McAfee' },
  { match: /revit\s*2026/i, id: 'revit', label: 'Revit 2026' },
];

const CATEGORY_RULES = [
  { match: /(adobe|photoshop|illustrator|premiere|acrobat|after.?effects|lightroom|creative.?cloud)/i, id: 'adobe' },
  { match: /(autodesk|autocad|revit|inventor|maya|3ds.?max)/i, id: 'autodesk' },
  { match: /(antivirus|avast|avg|eset|nod32|kaspersky|mcafee|malwarebytes|bitdefender|norton|panda|sophos|f.?secure|comodo|vipre|bullguard|total.?av|webroot|trend.?micro)/i, id: 'seguridad' },
  { match: /(coreldraw|sketchup|solidworks|matlab|minitab|stata|spss|origin)/i, id: 'adobe' },
];

const CATEGORY_CONFIG = {
  microsoft: { iconoId: 'simple-icons:microsoft', iconoColor: '#00A4EF' },
  adobe: { iconoId: 'simple-icons:adobe', iconoColor: '#FF0000' },
  autodesk: { iconoId: 'simple-icons:autodesk', iconoColor: '#E51050' },
  seguridad: { iconoId: 'mdi:shield-check', iconoColor: '#00C853' },
};

function categorize(name) {
  const lc = name.toLowerCase();
  for (const rule of CATEGORY_RULES) {
    if (rule.match.test(lc)) return rule.id;
  }
  return 'microsoft';
}

function cleanName(name) {
  return name.replace(/^licencia\s+/i, '').trim();
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 50);
}

async function fetchPage(url) {
  const resp = await fetch(url, {
    headers: { 'User-Agent': 'MKDIGITAL/1.0 (price-fetcher)' },
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${url}`);
  return resp.text();
}

function extractProductsFromHTML(html) {
  const products = [];
  const starts = [];
  const divRegex = /<div[^>]*class="[^"]*\bwd-product\b[^"]*"[^>]*data-loop="(\d+)"[^>]*>/gi;
  let m;
  while ((m = divRegex.exec(html)) !== null) starts.push(m.index);
  for (let i = 0; i < starts.length; i++) {
    const start = starts[i];
    const end = i + 1 < starts.length ? starts[i + 1] : html.length;
    products.push(html.slice(start, end));
  }
  return products;
}

function parsePrice(htmlBlock) {
  const insMatch = htmlBlock.match(/<ins[^>]*>.*?<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">\$<\/span>(\d+(?:\.\d+)?)<\/bdi><\/span><\/ins>/i);
  if (insMatch) return parseFloat(insMatch[1]);
  const regMatch = htmlBlock.match(/<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">\$<\/span>(\d+(?:\.\d+)?)<\/bdi><\/span>(?!.*<(?:del|ins))/i);
  if (regMatch) return parseFloat(regMatch[1]);
  return null;
}

function parseName(htmlBlock) {
  const m = htmlBlock.match(/<h3[^>]*class="[^"]*\bwd-entities-title\b[^"]*"[^>]*>.*?<a[^>]*>([^<]+)<\/a>/is);
  return m ? m[1].trim() : null;
}

function matchProduct(name) {
  if (!name) return null;
  for (const rule of PRODUCT_MAP) {
    if (rule.match.test(name)) return rule;
  }
  return null;
}

function buildPriceMap(softkeyProducts) {
  const matched = new Map();
  const unmatched = [];
  for (const sp of softkeyProducts) {
    const rule = matchProduct(sp.name);
    if (rule) {
      const key = rule.id;
      if (!matched.has(key) || sp.price < matched.get(key).price) {
        matched.set(key, { id: key, label: rule.label, price: sp.price, name: sp.name });
      }
    } else {
      unmatched.push(sp);
    }
  }
  return { matched: [...matched.values()], unmatched };
}

(async () => {
  console.log('=== MKDIGITAL Price Fetcher ===\n');
  try {
    const all = [];
    let pageUrl = TIENDA_URL;
    let pageNum = 0;
    const visited = new Set();
    while (pageUrl && pageNum < 15) {
      if (visited.has(pageUrl)) break;
      visited.add(pageUrl);
      console.log(`Fetching page ${++pageNum}: ${pageUrl}`);
      const html = await fetchPage(pageUrl);
      const blocks = extractProductsFromHTML(html);
      console.log(`  → ${blocks.length} products`);
      for (const block of blocks) {
        const name = parseName(block);
        const price = parsePrice(block);
        if (name && price !== null && price >= 5) all.push({ name, price });
      }
      const nextMatch = html.match(/<a[^>]+class="[^"]*\bnext\b[^"]*"[^>]+href="([^"]+)"/i);
      pageUrl = nextMatch ? nextMatch[1].replace(/&amp;/g, '&') : null;
    }
    console.log(`\nTotal: ${all.length} products`);
    const { matched, unmatched } = buildPriceMap(all);

    // Build price override object for hardcoded products
    const output = {};
    for (const item of matched) {
      const markup = markupForPrice(item.price);
      const finalUsd = item.price + markup;
      const finalCordobas = Math.round(finalUsd * EXCHANGE_RATE);
      output[item.id] = {
        usd: item.price,
        markup,
        finalUsd,
        precio: `C$${finalCordobas.toLocaleString('en')}`,
        updatedAt: new Date().toISOString(),
        source: item.name,
      };
    }

    // Build full catalog from unmatched products, plus transform matched into catalog too
    const catalogProducts = [];
    const seenIds = new Set();

    // Add matched products to catalog (they use original names)
    for (const item of matched) {
      const markup = markupForPrice(item.price);
      const finalUsd = item.price + markup;
      const finalCordobas = Math.round(finalUsd * EXCHANGE_RATE);
      const niceName = cleanName(item.name);
      const cat = categorize(item.name);
      const cfg = CATEGORY_CONFIG[cat] || CATEGORY_CONFIG.microsoft;
      const pid = item.id;
      seenIds.add(pid);
      catalogProducts.push({
        id: pid,
        nombre: item.label,
        precio: `C$${finalCordobas.toLocaleString('en')}`,
        categoria: cat,
        iconoId: cfg.iconoId,
        iconoColor: cfg.iconoColor,
      });
    }

    // Add unmatched products to catalog
    for (const item of unmatched) {
      const niceName = cleanName(item.name);
      const pid = slugify(niceName);
      if (seenIds.has(pid)) continue;
      seenIds.add(pid);
      const markup = markupForPrice(item.price);
      const finalUsd = item.price + markup;
      const finalCordobas = Math.round(finalUsd * EXCHANGE_RATE);
      const cat = categorize(item.name);
      const cfg = CATEGORY_CONFIG[cat] || CATEGORY_CONFIG.microsoft;
      catalogProducts.push({
        id: pid,
        nombre: niceName,
        precio: `C$${finalCordobas.toLocaleString('en')}`,
        categoria: cat,
        iconoId: cfg.iconoId,
        iconoColor: cfg.iconoColor,
      });
    }

    // Write prices.ts
    const tsLines = [
      '// Auto-generated by scripts/fetch-prices.mjs — do not edit manually',
      `// Last updated: ${new Date().toISOString()}`,
      '',
      'export interface SoftkeyProduct {',
      '  id: string;',
      '  nombre: string;',
      '  precio: string;',
      '  categoria: string;',
      '  iconoId: string;',
      '  iconoColor: string;',
      '}',
      '',
      '// Price overrides for hardcoded products',
      'export const softkeyPrices: Record<string, string> = {',
    ];
    for (const [id, p] of Object.entries(output).sort()) {
      tsLines.push(`  "${id}": "${p.precio}",`);
    }
    tsLines.push('};');
    tsLines.push('');

    // Write full catalog
    tsLines.push('// Full product catalog from softkeypc.com');
    tsLines.push('export const softkeyCatalog: SoftkeyProduct[] = [');
    for (const p of catalogProducts) {
      tsLines.push(`  { id: "${p.id}", nombre: "${p.nombre}", precio: "${p.precio}", categoria: "${p.categoria}", iconoId: "${p.iconoId}", iconoColor: "${p.iconoColor}" },`);
    }
    tsLines.push('];');
    writeFileSync(OUTPUT, tsLines.join('\n') + '\n', 'utf-8');

    console.log(`\n✓ Saved to ${OUTPUT} (${catalogProducts.length} products in catalog)`);
    console.log('\nMatched:');
    for (const [id, p] of Object.entries(output)) {
      console.log(`  ${id}: $${p.usd} → +$${p.markup} = $${p.finalUsd} USD → ${p.precio}`);
    }
    if (unmatched.length > 0) {
      console.log(`\nUnmatched products added to catalog: ${unmatched.length}`);
    }
  } catch (err) {
    console.error('\n✗ Error:', err.message);
    process.exit(1);
  }
})();
