export interface Producto {
  id: string;
  nombre: string;
  precio: string;
  old?: string;
  off?: string;
  categoria: string;
  iconoId: string;
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
];

export const productos: Producto[] = [
  {
    id: "office2024",
    nombre: "Office 2024 Professional Plus",
    precio: "C$400",
    old: "C$500",
    off: "20%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-office",
    badge: "top",
    descripcion: "Word, Excel, PowerPoint, Outlook y más"
  },
  {
    id: "office2021",
    nombre: "Office 2021 Professional Plus",
    precio: "C$350",
    old: "C$450",
    off: "22%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-office",
    descripcion: "Word, Excel, PowerPoint, Outlook y más"
  },
  {
    id: "win10",
    nombre: "Windows 10 Pro",
    precio: "C$470",
    old: "C$650",
    off: "20%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-windows",
    descripcion: "Licencia digital con activación permanente"
  },
  {
    id: "win11",
    nombre: "Windows 11 Pro",
    precio: "C$700",
    old: "C$920",
    off: "20%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-windows",
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
    descripcion: "Suite completa de Adobe Creative Cloud"
  },
  {
    id: "creativecloud",
    nombre: "Adobe Creative Cloud",
    precio: "C$1,295",
    categoria: "adobe",
    iconoId: "simple-icons:adobecreativecloud",
    badge: "top",
    descripcion: "1 mes C$1,295 · 3 meses C$1,850 · 6 meses C$3,330 · 12 meses C$7,030"
  },
  {
    id: "acrobat",
    nombre: "Adobe Acrobat Pro 2020 DC",
    precio: "C$1,036",
    old: "C$1,480",
    off: "30%",
    categoria: "adobe",
    iconoId: "simple-icons:adobe",
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
    badge: "top",
    descripcion: "Licencia permanente · Editor PDF profesional"
  },
  {
    id: "autocad",
    nombre: "AutoCAD 2026",
    precio: "C$500",
    old: "C$650",
    off: "23%",
    categoria: "autodesk",
    iconoId: "simple-icons:autodesk",
    badge: "top",
    descripcion: "Diseño y dibujo asistido por computadora"
  },
  {
    id: "revit",
    nombre: "Revit 2026",
    precio: "C$500",
    old: "C$650",
    off: "23%",
    categoria: "autodesk",
    iconoId: "simple-icons:autodesk",
    descripcion: "Modelado de información para construcción"
  },
  {
    id: "avast",
    nombre: "Avast Premium Security",
    precio: "C$925",
    categoria: "seguridad",
    iconoId: "simple-icons:avast",
    badge: "top",
    descripcion: "12 meses · Protección completa contra malware y ransomware"
  },
  {
    id: "mcafee",
    nombre: "McAfee AntiVirus",
    precio: "C$740",
    categoria: "seguridad",
    iconoId: "simple-icons:mcafee",
    descripcion: "Protección completa contra amenazas y virus"
  },
  {
    id: "eset",
    nombre: "ESET NOD32",
    precio: "C$1,480",
    categoria: "seguridad",
    iconoId: "mdi:shield-check",
    badge: "top",
    descripcion: "1 dispositivo · 1 año · Antivirus ligero y eficaz"
  },
  {
    id: "kaspersky",
    nombre: "Kaspersky AntiVirus",
    precio: "C$1,295",
    categoria: "seguridad",
    iconoId: "simple-icons:kaspersky",
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
    badge: "own",
    descripcion: "Administración completa de restaurantes: pedidos, facturación, inventario y reportes",
    url: "https://app.mkdigitalnic.com/"
  },
];
