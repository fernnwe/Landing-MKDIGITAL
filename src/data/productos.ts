export interface Producto {
  id: string;
  nombre: string;
  precio: string;
  precioUSD?: string;
  old?: string;
  off?: string;
  categoria: string;
  img: string;
  badge?: "top" | "own";
  descripcion?: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  icono: string;
  color: string;
}

export const categorias: Categoria[] = [
  { id: "microsoft", nombre: "Microsoft", icono: "mdi:microsoft-windows", color: "rgba(0, 164, 239, 0.15)" },
  { id: "adobe", nombre: "Adobe", icono: "simple-icons:adobe", color: "rgba(255, 0, 0, 0.12)" },
  { id: "autodesk", nombre: "Autodesk", icono: "simple-icons:autodesk", color: "rgba(229, 16, 80, 0.12)" },
  { id: "seguridad", nombre: "Seguridad", icono: "mdi:shield-check", color: "rgba(0, 200, 83, 0.12)" },
  { id: "facturacion", nombre: "Facturación", icono: "mdi:calculator", color: "rgba(129, 140, 248, 0.12)" },
];

export const productos: Producto[] = [
  {
    id: "office2024",
    nombre: "Office 2024 Professional Plus",
    precio: "C$400",
    old: "C$500",
    off: "20%",
    categoria: "microsoft",
    img: "/productos/office2024.png",
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
    img: "/productos/office2021.png",
    descripcion: "Word, Excel, PowerPoint, Outlook y más"
  },
  {
    id: "win10",
    nombre: "Windows 10 Pro",
    precio: "C$470",
    old: "C$650",
    off: "20%",
    categoria: "microsoft",
    img: "/productos/windows10.png",
    descripcion: "Licencia digital con activación permanente"
  },
  {
    id: "win11",
    nombre: "Windows 11 Pro",
    precio: "C$700",
    old: "C$920",
    off: "20%",
    categoria: "microsoft",
    img: "/productos/windows11.png",
    descripcion: "Licencia digital con activación permanente"
  },
  {
    id: "adobe3",
    nombre: "Pack Adobe (3 Apps)",
    precio: "C$1,000",
    old: "C$1,300",
    off: "23%",
    categoria: "adobe",
    img: "/productos/adobe.jpg",
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
    img: "/productos/adobe.jpg",
    descripcion: "Suite completa de Adobe Creative Cloud"
  },
  {
    id: "acrobat",
    nombre: "Adobe Acrobat Pro",
    precio: "C$400",
    old: "C$550",
    off: "27%",
    categoria: "adobe",
    img: "/productos/acrobat.png",
    descripcion: "Editor y creador de PDF profesional"
  },
  {
    id: "autocad",
    nombre: "AutoCAD 2026",
    precio: "C$500",
    old: "C$650",
    off: "23%",
    categoria: "autodesk",
    img: "/productos/autocad.png",
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
    img: "/productos/revit.png",
    descripcion: "Modelado de información para construcción"
  },
  {
    id: "avast",
    nombre: "Avast Premium Security",
    precio: "C$800",
    old: "C$1,000",
    off: "20%",
    categoria: "seguridad",
    img: "/productos/avast.png",
    descripcion: "Protección completa contra malware y ransomware"
  },
  {
    id: "factulite",
    nombre: "FactuLite Android",
    precio: "C$3,700",
    old: "C$4,500",
    off: "18%",
    categoria: "facturacion",
    img: "/productos/factulite.png",
    badge: "own",
    descripcion: "App de facturación para emprendedores"
  },
  {
    id: "viperpos",
    nombre: "ViperPOS Sistema Web",
    precio: "C$3,000",
    off: "al mes",
    categoria: "facturacion",
    img: "/productos/viperpos.png",
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
    img: "/productos/facturacion.png",
    badge: "top",
    descripcion: "Software de facturación para escritorio"
  },
];
