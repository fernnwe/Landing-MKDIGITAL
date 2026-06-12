import { softkeyPrices } from './prices';

export interface Producto {
  id: string;
  nombre: string;
  precio: string;
  old?: string;
  off?: string;
  categoria: string;
  iconoId: string;
  iconoColor: string;
  badge?: "top" | "own";
  descripcion: string;
  url?: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  icono: string;
  iconoId: string;
  color: string;
  bgGradient: string;
}

export const categorias: Categoria[] = [
  { id: "microsoft", nombre: "Microsoft", icono: "fa-brands fa-microsoft", iconoId: "simple-icons:microsoft", color: "#00A4EF", bgGradient: "linear-gradient(135deg, #00A4EF 0%, #0078D4 100%)" },
  { id: "adobe", nombre: "Adobe", icono: "fa-brands fa-adobe", iconoId: "simple-icons:adobe", color: "#FF0000", bgGradient: "linear-gradient(135deg, #FF0000 0%, #cc0000 100%)" },
  { id: "autodesk", nombre: "Autodesk", icono: "fa-solid fa-cubes", iconoId: "simple-icons:autodesk", color: "#E51050", bgGradient: "linear-gradient(135deg, #E51050 0%, #b8003e 100%)" },
  { id: "seguridad", nombre: "Seguridad", icono: "fa-solid fa-shield-halved", iconoId: "mdi:shield-check", color: "#00C853", bgGradient: "linear-gradient(135deg, #00C853 0%, #009624 100%)" },
  { id: "facturacion", nombre: "Facturación", icono: "fa-solid fa-calculator", iconoId: "mdi:receipt-text", color: "#818CF8", bgGradient: "linear-gradient(135deg, #818CF8 0%, #6366F1 100%)" },
  { id: "restaurantes", nombre: "Restaurantes", icono: "fa-solid fa-utensils", iconoId: "mdi:silverware-variant", color: "#F59E0B", bgGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)" },
  { id: "farmacias", nombre: "Farmacias", icono: "fa-solid fa-prescription-bottle", iconoId: "mdi:medical-bag", color: "#22D3EE", bgGradient: "linear-gradient(135deg, #22D3EE 0%, #0891B2 100%)" },
];

export const productos: Producto[] = [
  {
    id: "office2024",
    nombre: "Office 2024 full permanente",
    precio: "C$400",
    old: "C$500",
    off: "20%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-office",
    iconoColor: "#D83B01",
    badge: "top",
    descripcion: "Word, Excel, PowerPoint, Outlook y más"
  },
  {
    id: "office2021",
    nombre: "Office 2021 full permanente",
    precio: "C$350",
    old: "C$450",
    off: "22%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-office",
    iconoColor: "#D83B01",
    descripcion: "Word, Excel, PowerPoint, Outlook y más"
  },
  {
    id: "win10",
    nombre: "Windows 10 Pro",
    precio: "C$925",
    old: "C$1,090",
    off: "20%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-windows",
    iconoColor: "#00A4EF",
    descripcion: "Licencia digital con activación permanente"
  },
  {
    id: "win11",
    nombre: "Windows 11 Pro",
    precio: "C$925",
    old: "C$1,340",
    off: "20%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-windows",
    iconoColor: "#00A4EF",
    descripcion: "Licencia digital con activación permanente"
  },
  {
    id: "adobe3",
    nombre: "Pack Adobe (3 Apps)",
    precio: "C$1,000",
    old: "C$1,300",
    off: "23%",
    categoria: "adobe",
    iconoId: "simple-icons:adobe",
    iconoColor: "#FF0000",
    badge: "top",
    descripcion: "Photoshop, Illustrator, Premiere"
  },
  {
    id: "adobe7",
    nombre: "Pack Adobe (7 Apps)",
    precio: "C$2,000",
    old: "C$2,500",
    off: "20%",
    categoria: "adobe",
    iconoId: "simple-icons:adobe",
    iconoColor: "#FF0000",
    descripcion: "Suite completa de Adobe Creative Cloud"
  },
  {
    id: "creativecloud",
    nombre: "Adobe Creative Cloud",
    precio: "C$1,295",
    categoria: "adobe",
    iconoId: "simple-icons:adobecreativecloud",
    iconoColor: "#FF0000",
    badge: "top",
    descripcion: "1 mes C$1,295 · 3 meses C$1,850 · 6 meses C$3,330 · 12 meses C$7,030"
  },
  {
    id: "acrobat",
    nombre: "Adobe Acrobat Pro 2020 DC",
    precio: "C$1,200",
    old: "C$1,480",
    off: "30%",
    categoria: "adobe",
    iconoId: "simple-icons:adobe",
    iconoColor: "#FF0000",
    descripcion: "Suscripción anual · Editor PDF profesional"
  },
  {
    id: "acrobat2020perm",
    nombre: "Adobe Acrobat Pro 2020",
    precio: "C$1,110",
    old: "C$1,480",
    off: "25%",
    categoria: "adobe",
    iconoId: "simple-icons:adobe",
    iconoColor: "#FF0000",
    badge: "top",
    descripcion: "Licencia permanente · Editor PDF profesional"
  },
  {
    id: "coreldraw",
    nombre: "CorelDRAW 2025 o full",
    precio: "C$500",
    categoria: "adobe",
    iconoId: "simple-icons:coreldraw",
    iconoColor: "#47A84B",
    descripcion: "Diseño gráfico profesional · Vector, ilustración y maquetación"
  },
  {
    id: "autocad",
    nombre: "AutoCAD 2026 full",
    precio: "C$500",
    old: "C$650",
    off: "23%",
    categoria: "autodesk",
    iconoId: "simple-icons:autodesk",
    iconoColor: "#E51050",
    badge: "top",
    descripcion: "Diseño y dibujo asistido por computadora"
  },
  {
    id: "revit",
    nombre: "Revit 2026 full",
    precio: "C$500",
    old: "C$650",
    off: "23%",
    categoria: "autodesk",
    iconoId: "simple-icons:autodesk",
    iconoColor: "#E51050",
    descripcion: "Modelado de información para construcción"
  },
  {
    id: "avast",
    nombre: "Avast Premium Security",
    precio: "C$925",
    categoria: "seguridad",
    iconoId: "simple-icons:avast",
    iconoColor: "#FF7800",
    badge: "top",
    descripcion: "12 meses · Protección completa contra malware y ransomware"
  },
  {
    id: "mcafee",
    nombre: "McAfee AntiVirus",
    precio: "C$740",
    categoria: "seguridad",
    iconoId: "simple-icons:mcafee",
    iconoColor: "#C01818",
    descripcion: "Protección completa contra amenazas y virus"
  },
  {
    id: "eset",
    nombre: "ESET NOD32",
    precio: "C$1,295",
    categoria: "seguridad",
    iconoId: "mdi:shield-check",
    iconoColor: "#00A64E",
    badge: "top",
    descripcion: "1 dispositivo · 1 año · Antivirus ligero y eficaz"
  },
  {
    id: "kaspersky",
    nombre: "Kaspersky AntiVirus",
    precio: "C$1,517",
    categoria: "seguridad",
    iconoId: "simple-icons:kaspersky",
    iconoColor: "#00A65E",
    badge: "top",
    descripcion: "1 dispositivo · 1 año · Protección avanzada contra malware"
  },
  {
    id: "factulite",
    nombre: "FactuLite Android",
    precio: "C$3,700",
    old: "C$4,500",
    off: "18%",
    categoria: "facturacion",
    iconoId: "mdi:cellphone",
    iconoColor: "#818CF8",
    badge: "own",
    descripcion: "App de facturación para emprendedores"
  },
  {
    id: "viperpos",
    nombre: "ViperPOS Sistema Web",
    precio: "C$3,000",
    off: "al mes",
    categoria: "facturacion",
    iconoId: "mdi:web",
    iconoColor: "#818CF8",
    badge: "own",
    descripcion: "Sistema profesional de facturación e inventario"
  },
  {
    id: "facturacionwin",
    nombre: "Sistema Facturación Windows",
    precio: "C$2,000",
    old: "C$2,500",
    off: "20%",
    categoria: "facturacion",
    iconoId: "mdi:monitor-dashboard",
    iconoColor: "#818CF8",
    badge: "top",
    descripcion: "Software de facturación para escritorio"
  },
  {
    id: "mksoft",
    nombre: "MKSOFT — Sistema para Restaurantes",
    precio: "C$900",
    off: "al mes",
    categoria: "restaurantes",
    iconoId: "mdi:silverware-variant",
    iconoColor: "#F59E0B",
    badge: "own",
    descripcion: "Administración completa de restaurantes: pedidos, facturación, inventario y reportes",
    url: "https://app.mkdigitalnic.com/"
  },
  {
    id: "mkfarma",
    nombre: "MKFARMA — Sistema para Farmacias",
    precio: "Gratis",
    categoria: "farmacias",
    iconoId: "mdi:medical-bag",
    iconoColor: "#22D3EE",
    badge: "own",
    descripcion: "Control de inventario, ventas, facturación, clientes, proveedores y fechas de vencimiento",
    url: "/mkfarma"
  },
].map(p => ({
  ...p,
  precio: softkeyPrices[p.id] || p.precio,
}));

