const fs = require('fs');
const path = require('path');

const DIST = path.resolve(__dirname, '..', 'dist');
const INDEX = path.join(DIST, 'index.html');

const routes = [
  {
    slug: 'index',
    path: '/',
    title: 'MKDIGITAL - Soporte técnico remoto en Nicaragua',
    description: 'Soporte técnico remoto en toda Nicaragua. Instalación de Office, Adobe, AutoCAD, antivirus y más. Atención inmediata por WhatsApp.',
    image: 'https://mkdigitalnic.com/soporte.jpg',
  },
  {
    slug: 'contacto',
    path: '/contacto',
    title: 'Contacto - MKDIGITAL Nicaragua',
    description: 'Contáctanos por WhatsApp o correo. Soporte técnico remoto en toda Nicaragua.',
    image: '',
  },
  {
    slug: 'catalogo',
    path: '/catalogo',
    title: 'Catálogo - MKDIGITAL Nicaragua',
    description: 'Catálogo de software original con precios actualizados. Office, Adobe, AutoCAD y más.',
    image: '',
  },
  {
    slug: 'mkfarma',
    path: '/mkfarma',
    title: 'MKFARMA - Sistema de gestión para farmacias | MKDIGITAL',
    description: 'Control de inventario, ventas, facturación y más para tu farmacia. MKFARMA para Windows, pago único de C$3,700.',
    image: 'https://mkdigitalnic.com/mkfarma.png',
  },
  {
    slug: 'dentalpro',
    path: '/dentalpro',
    title: 'DentalPro - Sistema para clínicas dentales | MKDIGITAL',
    description: 'Gestión integral para tu clínica dental: pacientes, odontograma 2D/3D, citas con recordatorios por WhatsApp, pagos y reportes. DentalPro para Windows y Android.',
    image: 'https://mkdigitalnic.com/dentalpro/logo.png',
  },
  {
    slug: 'activa-licencia',
    path: '/activa-licencia',
    title: 'Canjear licencias - MKDIGITAL Nicaragua',
    description: 'Canjea tu licencia McAfee AntiVirus o Avast Premium aquí. Promoción exclusiva por tiempo limitado en Nicaragua.',
    image: '',
  },
  {
    slug: 'anydesk',
    path: '/anydesk',
    title: 'Descargar AnyDesk - MKDIGITAL Nicaragua',
    description: 'Descarga AnyDesk gratis para soporte técnico remoto. Conexión rápida y segura con nuestro equipo de soporte en Nicaragua.',
    image: '',
  },
  {
    slug: 'beneficios',
    path: '/beneficios',
    title: 'Beneficios - MKDIGITAL Nicaragua',
    description: '¿Por qué elegir MKDIGITAL? Soporte técnico remoto, instalación de programas, precios justos y atención personalizada en Nicaragua.',
    image: '',
  },
  {
    slug: 'comentarios',
    path: '/comentarios',
    title: 'Comentarios - MKDIGITAL Nicaragua',
    description: 'Opiniones y reseñas de nuestros clientes en Nicaragua. Comparte tu experiencia con nuestro servicio.',
    image: '',
  },
  {
    slug: 'faq',
    path: '/faq',
    title: 'Preguntas Frecuentes - MKDIGITAL Nicaragua',
    description: 'Resolvemos tus dudas sobre instalación de programas, soporte técnico remoto, licencias y más en Nicaragua.',
    image: '',
  },
  {
    slug: 'soluciones',
    path: '/soluciones',
    title: 'Soluciones - MKDIGITAL Nicaragua',
    description: 'Soluciones de software para hogares y empresas en Nicaragua. Instalación, configuración y soporte técnico remoto.',
    image: '',
  },
];

const OG_DEFAULT = 'https://mkdigitalnic.com/logo.svg';

if (!fs.existsSync(INDEX)) {
  console.error('dist/index.html not found — run "npm run build" first');
  process.exit(1);
}

const template = fs.readFileSync(INDEX, 'utf-8');
let count = 0;

for (const r of routes) {
  const ogImage = r.image || OG_DEFAULT;
  const canonical = `https://mkdigitalnic.com${r.path}`;

  let html = template;

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${r.title}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${r.description}"`
  );

  // Replace og:title
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${r.title}"`
  );

  // Replace og:description
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${r.description}"`
  );

  // Replace og:image
  html = html.replace(
    /<meta property="og:image" content="[^"]*"/,
    `<meta property="og:image" content="${ogImage}"`
  );

  // Replace og:url
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${canonical}"`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonical}"`
  );

  const outFile = path.join(DIST, `${r.slug}.html`);
  fs.writeFileSync(outFile, html, 'utf-8');
  count++;
}

console.log(`Prerendered ${count} routes with meta tags.`);
