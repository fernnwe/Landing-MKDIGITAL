import './ProductosShowcase.css';

const productos = [
  { src: '/productos/windows11.png', nombre: 'Windows 11' },
  { src: '/productos/windows10.png', nombre: 'Windows 10' },
  { src: '/productos/office2024.png', nombre: 'Office 2024' },
  { src: '/productos/office2021.png', nombre: 'Office 2021' },
  { src: '/productos/adobe.jpg', nombre: 'Adobe Creative Cloud' },
  { src: '/productos/acrobat.png', nombre: 'Adobe Acrobat' },
  { src: '/productos/autocad.png', nombre: 'AutoCAD' },
  { src: '/productos/revit.png', nombre: 'Revit' },
  { src: '/productos/avast.png', nombre: 'Avast' },
  { src: '/productos/viperpos.png', nombre: 'ViperPOS' },
  { src: '/productos/factulite.png', nombre: 'FactuLite' },
  { src: '/productos/facturacion.png', nombre: 'Facturación' },
  { src: '/productos/mkfarma-logo.png', nombre: 'MK Farma' },
];

export default function ProductosShowcase() {
  return (
    <section className="section productos-section">
      <div className="container">
        <div className="section-header">
          <span className="badge reveal reveal-up">PRODUCTOS</span>
          <h2 className="reveal reveal-up stagger-1">Software original con entrega inmediata</h2>
          <p className="reveal reveal-up stagger-2">Todos los programas que necesitas, originales y con instalación remota incluida.</p>
        </div>
        <div className="productos-grid">
          {productos.map((p, i) => (
            <div key={p.src} className={`producto-card spotlight-card reveal reveal-up stagger-${Math.min(i + 1, 8)}`}>
              <img src={p.src} alt={p.nombre} loading="lazy" />
              <span className="producto-name">{p.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
