export interface Producto {
  id: string;
  nombre: string;
  precio: string;
  old?: string;
  off?: string;
  categoria: string;
  icono: string;
  iconoColor: string;
  badge?: "top" | "own";
  descripcion: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  icono: string;
  color: string;
  bgGradient: string;
}

export const categorias: Categoria[] = [
  { id: "microsoft", nombre: "Microsoft", icono: "fa-brands fa-microsoft", color: "#00A4EF", bgGradient: "linear-gradient(135deg, #00A4EF 0%, #0078D4 100%)" },
  { id: "adobe", nombre: "Adobe", icono: "fa-brands fa-adobe", color: "#FF0000", bgGradient: "linear-gradient(135deg, #FF0000 0%, #cc0000 100%)" },
  { id: "autodesk", nombre: "Autodesk", icono: "fa-solid fa-cubes", color: "#E51050", bgGradient: "linear-gradient(135deg, #E51050 0%, #b8003e 100%)" },
  { id: "seguridad", nombre: "Seguridad", icono: "fa-solid fa-shield-halved", color: "#00C853", bgGradient: "linear-gradient(135deg, #00C853 0%, #009624 100%)" },
  { id: "facturacion", nombre: "Facturación", icono: "fa-solid fa-calculator", color: "#818CF8", bgGradient: "linear-gradient(135deg, #818CF8 0%, #6366F1 100%)" },
];

export const productos: Producto[] = [
  {
    id: "office2024",
    nombre: "Office 2024 Professional Plus",
    precio: "C$400",
    old: "C$500",
    off: "20%",
    categoria: "microsoft",
    icono: "fa-regular fa-file-lines",
    iconoColor: "#D83B01",
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
    icono: "fa-regular fa-file-lines",
    iconoColor: "#D83B01",
    descripcion: "Word, Excel, PowerPoint, Outlook y más"
  },
  {
    id: "win10",
    nombre: "Windows 10 Pro",
    precio: "C$470",
    old: "C$650",
    off: "20%",
    categoria: "microsoft",
    icono: "fa-brands fa-windows",
    iconoColor: "#00A4EF",
    descripcion: "Licencia digital con activación permanente"
  },
  {
    id: "win11",
    nombre: "Windows 11 Pro",
    precio: "C$700",
    old: "C$920",
    off: "20%",
    categoria: "microsoft",
    icono: "fa-brands fa-windows",
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
    icono: "fa-brands fa-adobe",
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
    icono: "fa-brands fa-adobe",
    iconoColor: "#FF0000",
    descripcion: "Suite completa de Adobe Creative Cloud"
  },
  {
    id: "acrobat",
    nombre: "Adobe Acrobat Pro",
    precio: "C$400",
    old: "C$550",
    off: "27%",
    categoria: "adobe",
    icono: "fa-regular fa-file-pdf",
    iconoColor: "#D50000",
    descripcion: "Editor y creador de PDF profesional"
  },
  {
    id: "autocad",
    nombre: "AutoCAD 2026",
    precio: "C$500",
    old: "C$650",
    off: "23%",
    categoria: "autodesk",
    icono: "fa-solid fa-drafting-compass",
    iconoColor: "#E51050",
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
    icono: "fa-solid fa-building",
    iconoColor: "#009999",
    descripcion: "Modelado de información para construcción"
  },
  {
    id: "avast",
    nombre: "Avast Premium Security",
    precio: "C$800",
    old: "C$1,000",
    off: "20%",
    categoria: "seguridad",
    icono: "fa-solid fa-shield-halved",
    iconoColor: "#FF7800",
    descripcion: "Protección completa contra malware y ransomware"
  },
  {
    id: "factulite",
    nombre: "FactuLite Android",
    precio: "C$3,700",
    old: "C$4,500",
    off: "18%",
    categoria: "facturacion",
    icono: "fa-solid fa-mobile-screen-button",
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
    icono: "fa-solid fa-display",
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
    icono: "fa-solid fa-desktop",
    iconoColor: "#818CF8",
    badge: "top",
    descripcion: "Software de facturación para escritorio"
  },
];
