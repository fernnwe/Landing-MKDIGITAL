import { Icon } from '@iconify/react';
import './Software.css';

const products = [
  {
    name: 'MK Farma',
    icon: 'mdi:medical-bag',
    tag: 'Gestión farmacéutica',
    desc: 'Plataforma integral para la gestión de farmacias con control de medicamentos, lotes y facturación electrónica.',
    features: [
      'Control de lotes y fechas de vencimiento',
      'Facturación electrónica SRI',
      'Inventario automatizado en tiempo real',
      'Reportes gerenciales y analytics',
    ],
    accent: 'linear-gradient(135deg, #06B6D4, #22D3EE)',
  },
  {
    name: 'Sistema de Inventario',
    icon: 'mdi:package-variant-closed',
    tag: 'Control de stock',
    desc: 'Solución completa para la gestión de inventarios con seguimiento en tiempo real y alertas inteligentes.',
    features: [
      'Seguimiento de stock multi-almacén',
      'Alertas de inventario bajo y vencimientos',
      'Transferencias entre sucursales',
      'Reportes y dashboard en vivo',
    ],
    accent: 'linear-gradient(135deg, #10B981, #059669)',
  },
  {
    name: 'ViperPOS',
    icon: 'mdi:desktop-classic',
    tag: 'Punto de venta web',
    desc: 'Sistema profesional de facturación e inventario accesible desde cualquier navegador o dispositivo.',
    features: [
      'Facturación electrónica y tickets',
      'Multiusuario y multisucursal',
      'Inventario en tiempo real',
      'Soporte técnico incluido',
    ],
    accent: 'linear-gradient(135deg, #06B6D4, #0891B2)',
  },
];

export default function Software() {
  return (
    <section className="section software-section">
      <div className="container">
        <div className="section-header reveal reveal-up">
          <span className="badge">SOFTWARE DE FACTURACIÓN</span>
          <h2>Sistemas de venta listos para implementar</h2>
          <p>
            Instalamos, configuramos y dejamos funcionando sistemas de facturación
            profesional desarrollados por aliados tecnológicos.
          </p>
        </div>

        <div className="software-grid">
          {products.map((product, i) => (
            <div key={product.name} className={`glow-card spotlight-card software-card reveal reveal-up stagger-${i + 1}`}>
              <div className="card-accent" style={{ background: product.accent }}></div>
              <div className="software-top">
                <div className="sw-icon" style={{ background: product.accent }}>
                  <Icon icon={product.icon} />
                </div>
                <span className="software-badge">{product.tag}</span>
              </div>
              <h3>{product.name}</h3>
              <p className="software-desc">{product.desc}</p>
              <ul className="feature-list">
                {product.features.map((feat) => (
                  <li key={feat}>
                    <Icon icon="mdi:check-circle" />
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/50581088124?text=${encodeURIComponent(`Quiero información sobre ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="software-cta"
              >
                <Icon icon="mdi:whatsapp" />
                Consultar por WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="divider reveal reveal-scale"></div>
      </div>
    </section>
  );
}
