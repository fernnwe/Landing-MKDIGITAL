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
  // { match: /coreldraw\s*graphics\s*suite\s*2024/i, id: 'coreldraw', label: 'CorelDRAW' },
];

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
    const tsPath = OUTPUT.replace(/\.json$/, '.ts');
    const tsLines = [
      '// Auto-generated by scripts/fetch-prices.mjs — do not edit manually',
      `// Last updated: ${new Date().toISOString()}`,
      'export const softkeyPrices: Record<string, string> = {',
    ];
    for (const [id, p] of Object.entries(output).sort()) {
      tsLines.push(`  "${id}": "${p.precio}",`);
    }
    tsLines.push('};');
    writeFileSync(tsPath, tsLines.join('\n') + '\n', 'utf-8');
    console.log(`\n✓ Saved to ${tsPath}`);
    console.log('\nMatched:');
    for (const [id, p] of Object.entries(output)) {
      console.log(`  ${id}: $${p.usd} → +$${p.markup} = $${p.finalUsd} USD → ${p.precio}`);
    }
    if (unmatched.length > 0) {
      console.log(`\nNot matched (${unmatched.length}):`);
      for (const u of unmatched.slice(0, 25)) console.log(`  - $${u.price} "${u.name}"`);
      if (unmatched.length > 25) console.log(`  ... and ${unmatched.length - 25} more`);
    }
  } catch (err) {
    console.error('\n✗ Error:', err.message);
    process.exit(1);
  }
})();
