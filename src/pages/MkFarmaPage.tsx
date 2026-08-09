import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { usePageMeta } from '../hooks/usePageMeta';
import './MkFarmaPage.css';

const WA_BUY =
  'https://wa.me/50581088124?text=Hola%2C%20quiero%20adquirir%20MKFARMA%20(C%243%2C700%20%3D%20%24100%20USD%2C%20pago%20%C3%BAnico)';
const WA_INFO = 'https://wa.me/50581088124?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20MKFARMA';
const WA_HELP = 'https://wa.me/50581088124?text=Hola%2C%20necesito%20ayuda%20para%20instalar%20MKFARMA';

const slides = [
  { src: '/mkfarma/logo.png', alt: 'MKFARMA Logo' },
  { src: '/mkfarma.png', alt: 'MKFARMA' },
  { src: '/mkfarma/1.png', alt: 'MKFARMA' },
  { src: '/mkfarma/2.png', alt: 'MKFARMA' },
  { src: '/mkfarma/3.png', alt: 'MKFARMA' },
  { src: '/mkfarma/4.png', alt: 'MKFARMA' },
];

const features = [
  { icon: 'mdi:gauge', color: '#22D3EE', title: 'Dashboard', desc: 'Panel con tarjetas de resumen: ventas del día, productos bajos de stock, vencidos, por vencer y gráfico de tendencia.' },
  { icon: 'mdi:package-variant-closed', color: '#818CF8', title: 'Inventario', desc: 'CRUD de productos, categorías, control de stock, alertas de stock bajo/vencidos, vista por lotes con fechas de vencimiento.' },
  { icon: 'mdi:cart', color: '#00C853', title: 'Punto de Venta', desc: 'Carrito de compras, búsqueda por código/nombre, selección de cliente, pago dividido (efectivo/tarjeta/transferencia), descuento e impresión de voucher térmico 58mm.' },
  { icon: 'mdi:users', color: '#22D3EE', title: 'Clientes', desc: 'CRUD de clientes con historial de compras por cliente.' },
  { icon: 'mdi:truck', color: '#F43F5E', title: 'Proveedores', desc: 'CRUD completo de proveedores.' },
  { icon: 'mdi:cube', color: '#22D3EE', title: 'Compras', desc: 'Registro de compras con lotes, números de lote y fechas de vencimiento por producto.' },
  { icon: 'mdi:cash-register', color: '#818CF8', title: 'Caja', desc: 'Apertura/cierre de caja, registro de ingresos/gastos, historial de movimientos y diferencia esperado vs real.' },
  { icon: 'mdi:chart-line', color: '#00C853', title: 'Reportes', desc: 'Reportes de ventas por período, vencimientos, stock bajo, clientes frecuentes. Exportables a Excel/CSV/PDF.' },
  { icon: 'mdi:cog', color: '#22D3EE', title: 'Usuarios', desc: 'CRUD de usuarios con roles: Admin, Supervisor, Cajero, Inventario.' },
  { icon: 'mdi:database', color: '#F43F5E', title: 'Respaldos', desc: 'Crear y restaurar respaldos completos de la base de datos SQLite local.' },
  { icon: 'mdi:gear', color: '#22D3EE', title: 'Configuración', desc: 'Nombre del negocio, dirección, teléfono, email, IVA, selector de impresora y modo oscuro.' },
  { icon: 'mdi:clipboard-list', color: '#818CF8', title: 'Auditoría', desc: 'Registro de todas las acciones: quién, qué y cuándo.' },
  { icon: 'mdi:history', color: '#00C853', title: 'Historial de Ventas', desc: 'Historial completo de ventas con filtros por fecha.' },
];

const specs = [
  { icon: 'mdi:printer', title: 'Impresión térmica', desc: 'ESC/POS con driver Genérico y Pos-58C' },
  { icon: 'mdi:file-export', title: 'Exportación', desc: 'Reportes a Excel, CSV y PDF' },
  { icon: 'mdi:database', title: 'Base de datos', desc: 'SQLite local con 23 tablas' },
  { icon: 'mdi:reload', title: 'Respaldos', desc: 'Crear y restaurar backups de BD' },
  { icon: 'mdi:moon-waning-crescent', title: 'Modo oscuro', desc: 'Interfaz con tema claro/oscuro' },
  { icon: 'mdi:lock', title: 'Autenticación', desc: 'Roles y permisos por usuario' },
  { icon: 'mdi:cash', title: 'Moneda local', desc: 'C$ (Córdobas) con separadores de miles' },
  { icon: 'mdi:shield-half-full', title: 'Seguridad', desc: 'Registro de auditoría de todas las acciones' },
];

export default function MkFarmaPage() {
  usePageMeta(
    'MKFARMA - Sistema de gestión para farmacias | MKDIGITAL',
    'Control de inventario, ventas, facturación y más para tu farmacia. MKFARMA para Windows, pago único de C$3,700.',
    'https://mkdigitalnic.com/mkfarma.png',
  );

  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const goTo = useCallback((i: number) => {
    setCurrent((i + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => goTo(current + 1), 5000);
    return () => window.clearInterval(interval);
  }, [current, goTo]);

  const openModal = () => {
    setError(false);
    setPassword('');
    setShowModal(true);
    window.setTimeout(() => inputRef.current?.focus(), 50);
  };

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const checkPass = () => {
    if (password === 'mkdigital2026$') {
      setShowModal(false);
      const a = document.createElement('a');
      a.href = '/MKFARMA-1.0.0.zip';
      a.download = 'MKFARMA-1.0.0.zip';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      setError(true);
      inputRef.current?.focus();
    }
  };

  return (
    <>
      <section className="mf-hero reveal reveal-up">
        <div className="mf-hero-bg">
          <div className="mf-orb mf-orb-1"></div>
          <div className="mf-orb mf-orb-2"></div>
          <div className="mf-orb mf-orb-3"></div>
          <div className="mf-grid"></div>
        </div>
        <div className="container">
          <div className="mf-hero-grid">
            <div className="mf-hero-content">
              <span className="badge"><Icon icon="mdi:pill" /> SISTEMA PARA FARMACIAS</span>
              <h1>MK<span>FARMA</span></h1>
              <p className="mf-hero-desc">
                Gestión inteligente para tu farmacia. Control de inventario, ventas,
                facturación, clientes y proveedores en un solo lugar. Rápido, seguro y fácil de usar.
              </p>

              <div className="mf-version-badge">
                <span className="mf-version-dot"></span>
                Sistema en su versión 1.0.0
              </div>

              <div className="mf-hero-actions">
                <a href={WA_BUY} target="_blank" className="mf-btn-primary">
                  <Icon icon="mdi:cart" />
                  Adquirir MKFARMA
                </a>
                <a href={WA_INFO} target="_blank" className="mf-btn-secondary">
                  <Icon icon="simple-icons:whatsapp" />
                  Consultar
                </a>
              </div>

              <div className="mf-price-badge">
                <span className="mf-price-amount">C$3,700</span>
                <span className="mf-price-sep">=</span>
                <span className="mf-price-usd">$100 USD</span>
                <span className="mf-price-label">Pago único</span>
              </div>

              <div className="mf-platform-badge">
                <Icon icon="simple-icons:windows" />
                Disponible para Windows
              </div>
            </div>

            <div className="mf-hero-visual" id="mkfarma-carousel">
              <div className="mf-carousel-track">
                {slides.map((s, i) => (
                  <img
                    key={s.src}
                    src={s.src}
                    alt={s.alt}
                    className={`mf-carousel-slide${i === current ? ' active' : ''}`}
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="mf-carousel-dots" id="mkfarma-dots">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`mf-dot${i === current ? ' active' : ''}`}
                    onClick={() => goTo(i)}
                  ></span>
                ))}
              </div>
              <button className="mf-carousel-btn mf-carousel-prev" aria-label="Anterior" onClick={() => goTo(current - 1)}>
                <Icon icon="mdi:chevron-left" />
              </button>
              <button className="mf-carousel-btn mf-carousel-next" aria-label="Siguiente" onClick={() => goTo(current + 1)}>
                <Icon icon="mdi:chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mf-features reveal reveal-up">
        <div className="container">
          <div className="section-header">
            <span className="badge">FUNCIONALIDADES</span>
            <h2>Todo lo que tu farmacia necesita</h2>
            <p>Administra cada aspecto de tu negocio con herramientas diseñadas para farmacias</p>
          </div>

          <div className="mf-features-grid">
            {features.map((f) => (
              <div className="mf-feature-card" key={f.title}>
                <div className="mf-ficon" style={{ background: `${f.color}1A`, color: f.color }}>
                  <Icon icon={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mf-specs reveal reveal-up">
        <div className="container">
          <div className="section-header">
            <span className="badge">ESPECIFICACIONES</span>
            <h2>Características técnicas</h2>
            <p>MKFARMA viene con todo lo necesario para operar tu farmacia sin depender de internet.</p>
          </div>

          <div className="mf-specs-grid">
            {specs.map((s) => (
              <div className="mf-spec-item" key={s.title}>
                <Icon icon={s.icon} />
                <div>
                  <strong>{s.title}</strong>
                  <span>{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mf-tutorial reveal reveal-up">
        <div className="container">
          <div className="section-header">
            <span className="badge">TUTORIAL</span>
            <h2>Video de instalación</h2>
            <p>Aprende a instalar y configurar MKFARMA paso a paso.</p>
          </div>
          <div className="mf-tutorial-wrapper">
            <video controls preload="metadata">
              <source src="/mkfarma/tutorial.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="mf-download reveal reveal-up">
        <div className="container">
          <div className="mf-download-card">
            <img src="/mkfarma/logo.png" alt="MKFARMA" className="mf-download-logo" />

            <div className="section-header">
              <span className="badge">DESCARGA</span>
              <h2>Adquiere MKFARMA</h2>
              <p>Pago único de C$3,700 ($100 USD). Recibe el sistema en archivo .zip y actívalo en tu farmacia.</p>
            </div>

            <div className="mf-download-info">
              <div className="mf-dl-item">
                <Icon icon="mdi:zip-box" />
                <span>Archivo .zip</span>
              </div>
              <div className="mf-dl-item">
                <Icon icon="simple-icons:windows" />
                <span>Windows 10 / 11</span>
              </div>
              <div className="mf-dl-item">
                <Icon icon="mdi:chip" />
                <span>4 GB RAM mínimo</span>
              </div>
            </div>

            <a href={WA_BUY} target="_blank" className="mf-btn-primary mf-btn-large">
              <Icon icon="simple-icons:whatsapp" />
              Comprar por WhatsApp
            </a>

            <button onClick={openModal} className="mf-btn-download mf-btn-large">
              <Icon icon="mdi:download" />
              Descargar MKFARMA
            </button>

            <p className="mf-dl-help">
              ¿Necesitas ayuda con la instalación?
              <a href={WA_HELP} target="_blank">Contáctanos por WhatsApp</a>
            </p>
          </div>
        </div>
      </section>

      {showModal && (
        <div id="mfPasswordOverlay" className="mf-password-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="mf-password-modal">
            <button className="mf-password-close" aria-label="Cerrar" onClick={closeModal}>
              <Icon icon="mdi:close" />
            </button>
            <div className="mf-password-lock">
              <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="var(--primary)" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            </div>
            <h3>Descarga protegida</h3>
            <p>Ingresa la contraseña que recibiste al adquirir MKFARMA para descargar el sistema.</p>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') checkPass(); }}
              ref={inputRef}
            />
            <button className="mf-password-submit" onClick={checkPass}>Descargar</button>
            {error && <p id="mfPassError" className="mf-pass-error">Contraseña incorrecta</p>}
          </div>
        </div>
      )}
    </>
  );
}
