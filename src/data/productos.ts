import { softkeyPrices, softkeyMappedIds, softkeyCatalog } from './prices';

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
  detalle?: string;
  apps?: string[];
  appsSelect?: number;
  requisitos?: string[];
}

export const APPS_ADOBE = [
  'Photoshop',
  'Illustrator',
  'Premiere Pro',
  'After Effects',
  'Lightroom',
  'InDesign',
  'Dreamweaver',
  'Animate',
  'Audition',
  'Acrobat DC',
];

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
  { id: "restaurantes", nombre: "Restaurantes", icono: "fa-solid fa-utensils", iconoId: "mdi:silverware-variant", color: "#06B6D4", bgGradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)" },
  { id: "farmacias", nombre: "Farmacias", icono: "fa-solid fa-prescription-bottle", iconoId: "mdi:medical-bag", color: "#22D3EE", bgGradient: "linear-gradient(135deg, #22D3EE 0%, #0891B2 100%)" },
  { id: "clinicas dentales", nombre: "Clínicas dentales", icono: "fa-solid fa-tooth", iconoId: "mdi:tooth-outline", color: "#00A896", bgGradient: "linear-gradient(135deg, #00A896 0%, #00796B 100%)" },
];

const productosBase: Producto[] = [
  {
    id: "office2024",
    nombre: "Office 2024 full permanente",
    precio: "C$400",
    old: "C$720",
    off: "40%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-office",
    iconoColor: "#D83B01",
    badge: "top",
    descripcion: "Word, Excel, PowerPoint, Outlook y más",
    detalle: "La suite de ofimática más usada del mundo con licencia permanente (no requiere renovación). Incluye Word para documentos, Excel para hojas de cálculo, PowerPoint para presentaciones, Outlook para correo y OneNote. Compatible con Windows 10 y 11.",
    requisitos: [
      "Windows 10 o Windows 11 (64 bits)",
      "Procesador de 1.6 GHz o superior",
      "4 GB de RAM (8 GB recomendados)",
      "4 GB de espacio en disco",
      "Resolución de pantalla 1280×768"
    ]
  },
  {
    id: "office2021",
    nombre: "Office 2021 full permanente",
    precio: "C$400",
    old: "C$450",
    off: "22%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-office",
    iconoColor: "#D83B01",
    descripcion: "Word, Excel, PowerPoint, Outlook y más",
    detalle: "Suite de ofimática completa con licencia permanente. Incluye Word, Excel, PowerPoint, Outlook y OneNote. Perfecta para estudiantes, oficinas y uso personal en Windows 10 y 11.",
    requisitos: [
      "Windows 10 o Windows 11 (64 bits)",
      "Procesador de 1.6 GHz o superior",
      "4 GB de RAM",
      "4 GB de espacio en disco"
    ]
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
    descripcion: "Licencia digital con activación permanente",
    detalle: "Sistema operativo de Microsoft con licencia digital y activación permanente. Edición Pro para equipos y negocios: incluye BitLocker, Escritorio remoto, Hyper-V y unión a dominio.",
    requisitos: [
      "Procesador de 1 GHz o superior",
      "2 GB de RAM (4 GB recomendados)",
      "20 GB de espacio en disco",
      "Tarjeta gráfica compatible con DirectX 9",
      "Resolución de pantalla 800×600"
    ]
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
    descripcion: "Licencia digital con activación permanente",
    detalle: "La última versión del sistema operativo de Microsoft con licencia digital y activación permanente. Edición Pro con funciones avanzadas de seguridad, virtualización y productividad.",
    requisitos: [
      "Procesador compatible de 1 GHz o superior (2 núcleos)",
      "4 GB de RAM",
      "64 GB de espacio en disco",
      "UEFI + arranque seguro",
      "TPM versión 2.0",
      "Tarjeta gráfica compatible con DirectX 12"
    ]
  },
  {
    id: "adobe3",
    nombre: "Pack Adobe (3 Apps)",
    precio: "C$1,200",
    old: "C$1,500",
    off: "23%",
    categoria: "adobe",
    iconoId: "simple-icons:adobe",
    iconoColor: "#FF0000",
    badge: "top",
    descripcion: "Photoshop, Illustrator, Premiere",
    detalle: "Paquete de licencias para instalar 3 programas de Adobe a tu elección. Ideal para diseño gráfico, edición de fotos y video. Elige 3 apps del listado según lo que necesites.",
    appsSelect: 3,
    apps: ["Photoshop", "Illustrator", "Premiere Pro"],
    requisitos: [
      "Windows 10 o Windows 11 (64 bits)",
      "Procesador Intel o AMD de 4 núcleos",
      "8 GB de RAM (16 GB recomendados)",
      "10 GB de espacio en disco SSD",
      "Tarjeta gráfica con 2 GB de VRAM",
      "Resolución de pantalla 1920×1080"
    ]
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
    descripcion: "Suite completa de Adobe Creative Cloud",
    detalle: "Paquete de licencias para instalar 7 programas de Adobe a tu elección. La solución completa para diseño, edición, video y fotografía. Elige 7 apps del listado según lo que necesites.",
    appsSelect: 7,
    apps: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Lightroom", "InDesign", "Acrobat DC"],
    requisitos: [
      "Windows 10 o Windows 11 (64 bits)",
      "Procesador Intel o AMD de 6 núcleos o superior",
      "16 GB de RAM (32 GB recomendados)",
      "25 GB de espacio en disco SSD",
      "Tarjeta gráfica con 4 GB de VRAM",
      "Resolución de pantalla 1920×1080"
    ]
  },
  {
    id: "creativecloud",
    nombre: "Adobe Creative Cloud",
    precio: "C$1,295",
    categoria: "adobe",
    iconoId: "simple-icons:adobecreativecloud",
    iconoColor: "#FF0000",
    badge: "top",
    descripcion: "1 mes C$1,295 · 3 meses C$1,850 · 6 meses C$3,330 · 12 meses C$7,030",
    detalle: "Toda la suite Adobe Creative Cloud con acceso a todas las apps: Photoshop, Illustrator, Premiere, After Effects, Lightroom y más. Suscripción con varios planes de duración.",
    apps: APPS_ADOBE,
    requisitos: [
      "Windows 10 o Windows 11 (64 bits)",
      "Procesador de 4 núcleos o superior",
      "8 GB de RAM (16 GB recomendados)",
      "Variable según la app (10–30 GB)",
      "Conexión a internet para activación"
    ]
  },
  {
    id: "creativecloud190",
    nombre: "Adobe Creative Cloud 12 meses",
    precio: "C$7,030",
    categoria: "adobe",
    iconoId: "simple-icons:adobecreativecloud",
    iconoColor: "#FF0000",
    badge: "top",
    descripcion: "$190 USD · 12 meses · Windows y macOS",
    detalle: "Suscripción anual de Adobe Creative Cloud por $190 USD (C$7,030). Acceso completo a todas las apps: Photoshop, Illustrator, Premiere, After Effects, Lightroom y más. Disponible para Windows y macOS.",
    apps: APPS_ADOBE,
    requisitos: [
      "Windows 10 o Windows 11 (64 bits) o macOS",
      "Procesador de 4 núcleos o superior",
      "8 GB de RAM (16 GB recomendados)",
      "Variable según la app (10–30 GB)",
      "Conexión a internet para activación"
    ]
  },
  {
    id: "acrobat",
    nombre: "Adobe Acrobat Pro 2020 DC",
    precio: "C$950",
    old: "C$1,480",
    off: "30%",
    categoria: "adobe",
    iconoId: "simple-icons:adobe",
    iconoColor: "#FF0000",
    descripcion: "Suscripción anual · Editor PDF profesional",
    detalle: "El editor PDF profesional de Adobe. Crea, edita, convierte y firma documentos PDF con herramientas avanzadas de OCR, combinación de archivos y protección por contraseña.",
    requisitos: ["Windows 10 o Windows 11 (64 bits)", "2 GB de RAM", "3 GB de espacio en disco", "Conexión a internet para activación"]
  },
  {
    id: "acrobat2020perm",
    nombre: "Adobe Acrobat Pro 2020",
    precio: "C$950",
    old: "C$1,480",
    off: "25%",
    categoria: "adobe",
    iconoId: "simple-icons:adobe",
    iconoColor: "#FF0000",
    badge: "top",
    descripcion: "Licencia permanente · Editor PDF profesional",
    detalle: "Editor PDF profesional de Adobe con licencia permanente (no requiere renovación). Crea, edita, convierte y firma documentos PDF con herramientas avanzadas de OCR y protección.",
    requisitos: ["Windows 10 o Windows 11 (64 bits)", "2 GB de RAM", "3 GB de espacio en disco"]
  },
  {
    id: "coreldraw",
    nombre: "CorelDRAW 2025 o full",
    precio: "C$500",
    old: "C$750",
    off:"25%",
    categoria: "adobe",
    iconoId: "simple-icons:coreldraw",
    iconoColor: "#47A84B",
    descripcion: "Diseño gráfico profesional · Vector, ilustración y maquetación",
    detalle: "Software profesional de diseño gráfico para crear ilustraciones vectoriales, logotipos, maquetas y materiales de imprenta. La alternativa líder a Illustrator con herramientas de edición de fotos.",
    requisitos: ["Windows 10 o Windows 11 (64 bits)", "4 GB de RAM (8 GB recomendados)", "2.5 GB de espacio en disco", "Tarjeta gráfica con 1 GB de VRAM"]
  },
  {
    id: "autocad",
    nombre: "AutoCAD 2027 full",
    precio: "C$700",
    old: "C$650",
    off: "23%",
    categoria: "autodesk",
    iconoId: "simple-icons:autodesk",
    iconoColor: "#E51050",
    badge: "top",
    descripcion: "Diseño y dibujo asistido por computadora",
    detalle: "El software líder mundial de CAD (diseño asistido por computadora). Crea planos 2D y modelos 3D precisos para arquitectura, ingeniería y construcción.",
    requisitos: [
      "Windows 10 o Windows 11 (64 bits)",
      "Procesador de 3+ GHz o superior",
      "8 GB de RAM (16 GB recomendados)",
      "10 GB de espacio en disco",
      "Tarjeta gráfica con 4 GB de VRAM",
      "Resolución de pantalla 1920×1080"
    ]
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
    descripcion: "Modelado de información para construcción",
    detalle: "Software BIM (Modelado de Información para la Construcción). Diseña edificios y estructuras en 3D con documentación automática, ideal para arquitectos e ingenieros civiles.",
    requisitos: [
      "Windows 10 o Windows 11 (64 bits)",
      "Procesador de 4+ GHz o superior",
      "16 GB de RAM (32 GB recomendados)",
      "30 GB de espacio en disco",
      "Tarjeta gráfica con 4 GB de VRAM"
    ]
  },
  {
    id: "avast",
    nombre: "Avast Premium Security",
    precio: "C$590",
    old:"C$820",
    off:"",
    categoria: "seguridad",
    iconoId: "simple-icons:avast",
    iconoColor: "#FF7800",
    badge: "top",
    descripcion: "12 meses · Protección completa contra malware y ransomware",
    detalle: "Antivirus premium con licencia de 12 meses. Protege tu equipo en tiempo real contra malware, ransomware, phishing y amenazas web. Incluye firewall, protección de correo y VPN.",
    requisitos: ["Windows 8.1 o superior", "2 GB de RAM", "2 GB de espacio en disco", "Conexión a internet para activación"]
  },
  {
    id: "mcafee",
    nombre: "McAfee AntiVirus",
    precio: "C$590",
    old:"C$820",
    off:"18%",
    categoria: "seguridad",
    iconoId: "simple-icons:mcafee",
    iconoColor: "#C01818",
    descripcion: "Protección completa contra amenazas y virus",
    detalle: "Antivirus de McAfee con protección en tiempo real contra virus, malware y amenazas online. Incluye firewall y protección de navegación web para mantener seguro tu equipo.",
    requisitos: ["Windows 10 o Windows 11", "2 GB de RAM", "1.5 GB de espacio en disco", "Conexión a internet para activación"]
  },
  {
    id: "eset",
    nombre: "ESET NOD32",
    precio: "C$1,295",
    categoria: "seguridad",
    iconoId: "mdi:shield-check",
    iconoColor: "#00A64E",
    badge: "top",
    descripcion: "1 dispositivo · 1 año · Antivirus ligero y eficaz",
    detalle: "Antivirus ESET NOD32 con licencia de 1 año para 1 dispositivo. Muy ligero y rápido, detecta y bloquea virus, malware y ransomware sin ralentizar tu equipo.",
    requisitos: ["Windows 10 o Windows 11", "2 GB de RAM", "5 GB de espacio en disco (recomendado)"]
  },
  {
    id: "kaspersky",
    nombre: "Kaspersky AntiVirus",
    precio: "C$1,517",
    categoria: "seguridad",
    iconoId: "simple-icons:kaspersky",
    iconoColor: "#00A65E",
    badge: "top",
    descripcion: "1 dispositivo · 1 año · Protección avanzada contra malware",
    detalle: "Antivirus Kaspersky con licencia de 1 año para 1 dispositivo. Protección avanzada contra malware, ransomware y amenazas en tiempo real, reconocido mundialmente por su eficacia.",
    requisitos: ["Windows 10 o Windows 11", "2 GB de RAM", "4 GB de espacio en disco", "Conexión a internet para activación"]
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
    descripcion: "App de facturación para emprendedores",
    detalle: "Aplicación móvil de facturación pensada para emprendedores y pequeños negocios. Permite crear facturas, controlar ventas e inventario desde tu celular Android de forma sencilla.",
    requisitos: ["Celular Android 6.0 o superior", "1 GB de RAM", "100 MB de espacio disponible"]
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
    descripcion: "Sistema profesional de facturación e inventario",
    detalle: "Sistema de facturación e inventario profesional accesible desde el navegador web. Gestiona ventas, stock, clientes y reportes desde cualquier dispositivo con conexión a internet.",
    requisitos: ["PC o dispositivo con navegador web", "4 GB de RAM", "Conexión a internet estable"]
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
    descripcion: "Software de facturación para escritorio",
    detalle: "Software de facturación profesional para Windows. Emite facturas, maneja inventario, clientes, proveedores y genera reportes, instalado directamente en tu computadora.",
    requisitos: ["Windows 10 o Windows 11", "4 GB de RAM", "2 GB de espacio en disco"]
  },

  {
    id: "mkfarma",
    nombre: "MKFARMA — Sistema para Farmacias",
    precio: "C$3,700",
    categoria: "farmacias",
    iconoId: "mdi:medical-bag",
    iconoColor: "#22D3EE",
    badge: "own",
    descripcion: "Control de inventario, ventas, facturación, clientes, proveedores y fechas de vencimiento",
    detalle: "Sistema completo de gestión para farmacias desarrollado por MKDIGITAL. Controla inventario, ventas, facturación, clientes, proveedores y alertas de fechas de vencimiento de medicamentos.",
    requisitos: ["Windows 10 o Windows 11", "4 GB de RAM", "2 GB de espacio en disco"],
    url: "/mkfarma"
  },
  {
    id: "dentalPro",
    nombre: "DentalPro - Gestión de clinicas dentales",
    precio: "C$5,500",
    categoria: "clinicas dentales",
    iconoId: "mdi:tooth-outline",
    iconoColor: "#00A896",
    badge: "own",
    descripcion: "Gestión integral para tu clínica dental: pacientes, odontograma 2D/3D, citas con recordatorios por WhatsApp, pagos y reportes",
    detalle: "Sistema integral para clínicas dentales de MKDIGITAL. Gestiona pacientes, odontograma 2D y 3D, citas con recordatorios automáticos por WhatsApp, pagos e historial clínico.",
    requisitos: ["Windows 10 o Windows 11", "4 GB de RAM", "2 GB de espacio en disco"],
    url: "/dentalpro"
  },
  {
    id: "office2019",
    nombre: "Office 2019 Pro Plus",
    precio: "C$400",
    old: "C$700",
    off: "22%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-office",
    iconoColor: "#D83B01",
    descripcion: "Word, Excel, PowerPoint, Outlook y más",
    detalle: "Suite ofimática de Microsoft con licencia permanente para Windows. Incluye Word, Excel, PowerPoint y Outlook para tus tareas diarias.",
    requisitos: ["Windows 10 o Windows 11", "2 GB de RAM", "4 GB de espacio en disco"]
  },
  {
    id: "office365",
    nombre: "Office 365 - Activación mediante cmd",
    precio: "C$400",
    old: "600",
    off: "20%",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-office",
    iconoColor: "#D83B01",
    descripcion: "Suscripción · 5 dispositivos",
    detalle: "Suscripción de Office 365 con activación mediante línea de comandos (CMD). Válida para 5 dispositivos con acceso a Word, Excel, PowerPoint y Outlook con actualizaciones continuas."
  },
  {
    id: "winserver2019",
    nombre: "Windows Server 2019 Standard",
    precio: "C$1,200",
    categoria: "microsoft",
    iconoId: "simple-icons:microsoft",
    iconoColor: "#00A4EF",
    descripcion: "Licencia para servidor empresarial"
  },
  {
    id: "winserver2022",
    nombre: "Windows Server 2022 Standard",
    precio: "C$1,500",
    categoria: "microsoft",
    iconoId: "simple-icons:microsoft",
    iconoColor: "#00A4EF",
    descripcion: "Servidor empresarial moderno"
  },
  {
    id: "winserver2025",
    nombre: "Windows Server 2025 Standard",
    precio: "C$2,000",
    categoria: "microsoft",
    iconoId: "simple-icons:microsoft",
    iconoColor: "#00A4EF",
    descripcion: "Última generación de servidor Microsoft"
  },
  {
    id: "creativecloud3",
    nombre: "Adobe CC 3 meses",
    precio: "C$2,220",
    categoria: "adobe",
    iconoId: "simple-icons:adobecreativecloud",
    iconoColor: "#FF0000",
    descripcion: "Photoshop, Illustrator, Premiere y más",
    detalle: "Suscripción de Adobe Creative Cloud por 3 meses. Acceso completo a todas las apps de Adobe Creative Cloud. Disponible para Windows y macOS.",
    apps: APPS_ADOBE,
    requisitos: [
      "Windows 10 o Windows 11 (64 bits) o macOS",
      "4 GB de RAM (8 GB recomendados)",
      "Variable según la app (10–30 GB)",
      "Conexión a internet para activación"
    ]
  },
  {
    id: "creativecloud6",
    nombre: "Adobe CC 6 meses",
    precio: "C$3,700",
    categoria: "adobe",
    iconoId: "simple-icons:adobecreativecloud",
    iconoColor: "#FF0000",
    descripcion: "Photoshop, Illustrator, Premiere y más",
    detalle: "Suscripción de Adobe Creative Cloud por 6 meses. Acceso completo a todas las apps de Adobe Creative Cloud. Disponible para Windows y macOS.",
    apps: APPS_ADOBE,
    requisitos: [
      "Windows 10 o Windows 11 (64 bits) o macOS",
      "4 GB de RAM (8 GB recomendados)",
      "Variable según la app (10–30 GB)",
      "Conexión a internet para activación"
    ]
  },
  {
    id: "creativecloud1",
    nombre: "Adobe CC 1 mes",
    precio: "C$1,295",
    categoria: "adobe",
    iconoId: "simple-icons:adobecreativecloud",
    iconoColor: "#FF0000",
    descripcion: "Photoshop, Illustrator, Premiere y más",
    detalle: "Suscripción de Adobe Creative Cloud por 1 mes. Acceso completo a todas las apps de Adobe Creative Cloud. Disponible para Windows y macOS.",
    apps: APPS_ADOBE,
    requisitos: [
      "Windows 10 o Windows 11 (64 bits) o macOS",
      "4 GB de RAM (8 GB recomendados)",
      "Variable según la app (10–30 GB)",
      "Conexión a internet para activación"
    ]
  },
  {
    id: "win11home",
    nombre: "Windows 11 Home",
    precio: "C$700",
    categoria: "microsoft",
    iconoId: "simple-icons:microsoft",
    iconoColor: "#00A4EF",
    descripcion: "Licencia digital para uso doméstico"
  },
  {
    id: "win10home",
    nombre: "Windows 10 Home",
    precio: "C$600",
    categoria: "microsoft",
    iconoId: "simple-icons:microsoft",
    iconoColor: "#00A4EF",
    descripcion: "Licencia digital para uso doméstico"
  },
  {
    id: "norton",
    nombre: "Norton Security Deluxe",
    precio: "C$800",
    categoria: "seguridad",
    iconoId: "mdi:shield-check",
    iconoColor: "#E30512",
    badge: "top",
    descripcion: "Protección completa multi-dispositivo"
  },
  {
    id: "malwarebytes",
    nombre: "Malwarebytes Premium",
    precio: "C$1,200",
    categoria: "seguridad",
    iconoId: "mdi:shield-check",
    iconoColor: "#F34A4A",
    badge: "top",
    descripcion: "Protección avanzada contra malware"
  },
  {
    id: "project2021",
    nombre: "Project Professional 2021",
    precio: "C$900",
    categoria: "microsoft",
    iconoId: "simple-icons:microsoft",
    iconoColor: "#00A4EF",
    descripcion: "Gestión de proyectos profesional"
  },
  {
    id: "visio2021",
    nombre: "Visio Professional 2021",
    precio: "C$900",
    categoria: "microsoft",
    iconoId: "simple-icons:microsoft",
    iconoColor: "#00A4EF",
    descripcion: "Diagramación y visualización profesional"
  },
  {
    id: "office2024std",
    nombre: "Office 2024 Pro Plus",
    precio: "C$400",
    categoria: "microsoft",
    iconoId: "mdi:microsoft-office",
    iconoColor: "#D83B01",
    descripcion: "Word, Excel, PowerPoint, Outlook"
  },
];

// Hardcoded products with price override from softkeypc
// Mapped products (from PRODUCT_MAP) are hidden if out of stock on supplier
const hardcoded = productosBase
  .filter(p => !softkeyMappedIds.includes(p.id) || softkeyPrices[p.id])
  .map(p => ({
    ...p,
    precio: softkeyPrices[p.id] || p.precio,
  }));

// Add all softkey catalog products (they won't have old/off/badge)
const hardcodedIds = new Set(hardcoded.map(p => p.id));
const additional: Producto[] = softkeyCatalog
  .filter(sp => !hardcodedIds.has(sp.id))
  .map(sp => ({
    ...sp,
    descripcion: '',
  }));

export const productos: Producto[] = [...hardcoded, ...additional];
