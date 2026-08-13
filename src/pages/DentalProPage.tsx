import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { usePageMeta } from '../hooks/usePageMeta';
import './DentalProPage.css';

const WA_BUY =
  'https://wa.me/50581088124?text=Hola%2C%20quiero%20adquirir%20DENTALPRO%20(C%245%2C550%20%3D%20%24150%20USD%2C%20pago%20%C3%BAnico%2C%20actualizaciones%20gratuitas)';
const WA_INFO = 'https://wa.me/50581088124?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20DENTALPRO';
const WA_HELP = 'https://wa.me/50581088124?text=Hola%2C%20necesito%20ayuda%20para%20instalar%20DENTALPRO';

const features = [
  { icon: 'mdi:lock', color: '#22D3EE', title: 'Acceso seguro', desc: 'Login local con usuario y contraseña protegidos con hash seguro y salt.' },
  { icon: 'mdi:shield-account', color: '#818CF8', title: 'Roles y permisos', desc: 'Roles Admin, Doctor y Recepcionista. Cada menú se oculta y protege según el permiso del usuario.' },
  { icon: 'mdi:view-dashboard', color: '#00C853', title: 'Dashboard', desc: 'Resumen del consultorio: estadísticas de pacientes, citas, cobros y movimientos recientes.' },
  { icon: 'mdi:account-heart', color: '#22D3EE', title: 'Pacientes', desc: 'Alta, edición y baja de pacientes con búsqueda y expediente completo: historia clínica, notas, citas, planes, presupuestos, pagos y odontograma.' },
  { icon: 'mdi:tooth', color: '#818CF8', title: 'Odontograma', desc: 'Interactivo en 2D y 3D: caries, restauración, ausente, corona, endodoncia, extracción, prótesis, implante y fractura. Giro y zoom en 3D sincronizados con el panel de detalles.' },
  { icon: 'mdi:calendar-check', color: '#00C853', title: 'Agenda y citas', desc: 'Calendario de citas con estados (confirmada, cancelada, etc.) y recordatorios por WhatsApp.' },
  { icon: 'mdi:doctor', color: '#22D3EE', title: 'Doctores', desc: 'Catálogo del personal de la clínica.' },
  { icon: 'mdi:medical-bag', color: '#818CF8', title: 'Tratamientos', desc: 'Catálogo de servicios con su precio.' },
  { icon: 'mdi:clipboard-pulse', color: '#00C853', title: 'Planes de tratamiento', desc: 'Planes por paciente con ítems y estados: pendiente, en curso y completado.' },
  { icon: 'mdi:cash', color: '#22D3EE', title: 'Pagos', desc: 'Registro de cobros por método de pago: efectivo, tarjeta, transferencia y más.' },
  { icon: 'mdi:file-document-outline', color: '#818CF8', title: 'Presupuestos', desc: 'Cotizaciones por paciente listas para compartir.' },
  { icon: 'mdi:chart-bar', color: '#00C853', title: 'Reportes', desc: 'Ingresos por método de pago, tratamientos más demandados y más.' },
  { icon: 'mdi:account-cog', color: '#22D3EE', title: 'Usuarios', desc: 'Creación y activación de usuarios con roles y permisos.' },
  { icon: 'mdi:cog', color: '#818CF8', title: 'Configuración', desc: 'Ajustes de la clínica y del sistema.' },
  { icon: 'mdi:database-arrow-up', color: '#00C853', title: 'Copias de seguridad', desc: 'Respaldo y restauración completa de la base de datos local.' },
];

const specs = [
  { icon: 'mdi:desktop-classic', title: 'App de escritorio', desc: 'Windows, funciona 100% sin internet' },
  { icon: 'mdi:database', title: 'Datos locales', desc: 'Base de datos en %APPDATA%\\DentalPro' },
  { icon: 'mdi:tooth', title: 'Odontograma 3D', desc: 'Vistas interactivas 2D y 3D por diente' },
  { icon: 'simple-icons:whatsapp', title: 'Recordatorios', desc: 'Avisos de citas por WhatsApp' },
  { icon: 'mdi:lock', title: 'Seguridad', desc: 'Hash con salt y permisos por módulo' },
  { icon: 'mdi:reload', title: 'Respaldos', desc: 'Crear y restaurar copias de BD' },
  { icon: 'mdi:account-group', title: 'Multiusuario', desc: 'Admin, Doctor y Recepcionista' },
  { icon: 'mdi:update', title: 'Actualizaciones gratis', desc: 'Mejoras generales sin costo adicional' },
];

export default function DentalProPage() {
  usePageMeta(
    'DentalPro - Sistema para clínicas dentales | MKDIGITAL',
    'Gestión integral para tu clínica dental: pacientes, odontograma 2D/3D, citas con recordatorios por WhatsApp, pagos y reportes. DentalPro para Windows, pago único de $150 USD.',
    'https://mkdigitalnic.com/dentalpro/logo.png',
  );

  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
      a.href = '/dentalpro/DentalProSetup-1.0.0.exe';
      a.download = 'DentalProSetup-1.0.0.exe';
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
      <section className="dp-hero reveal reveal-up">
        <div className="dp-hero-bg">
          <div className="dp-orb dp-orb-1"></div>
          <div className="dp-orb dp-orb-2"></div>
          <div className="dp-orb dp-orb-3"></div>
          <div className="dp-grid"></div>
        </div>
        <div className="container">
          <div className="dp-hero-grid">
            <div className="dp-hero-content">
              <span className="badge"><Icon icon="mdi:tooth" /> SISTEMA PARA CLÍNICAS DENTALES</span>
              <h1>Dental<span>Pro</span></h1>
              <p className="dp-hero-desc">
                Gestión integral para tu clínica dental: pacientes con expediente completo,
                odontograma interactivo 2D y 3D, agenda de citas con recordatorios por WhatsApp,
                pagos, presupuestos y reportes. Rápido, seguro y sin depender de internet.
              </p>

              <div className="dp-version-badge">
                <span className="dp-version-dot"></span>
                Sistema en su versión 1.0.0
              </div>

              <div className="dp-hero-actions">
                <a href={WA_BUY} target="_blank" className="dp-btn-primary">
                  <Icon icon="mdi:cart" />
                  Adquirir DentalPro
                </a>
                <a href={WA_INFO} target="_blank" className="dp-btn-secondary">
                  <Icon icon="simple-icons:whatsapp" />
                  Consultar
                </a>
              </div>

              <div className="dp-price-badge">
                <span className="dp-price-amount">$150</span>
                <span className="dp-price-sep">=</span>
                <span className="dp-price-usd">C$5,550</span>
                <span className="dp-price-label">Pago único</span>
              </div>

              <div className="dp-update-note">
                <Icon icon="mdi:update" />
                Actualizaciones gratuitas de por vida. No es obligatorio actualizar.
              </div>

              <div className="dp-platform-badge">
                <Icon icon="simple-icons:windows" />
                Disponible para Windows
              </div>
            </div>

            <div className="dp-hero-visual">
              <div className="dp-glow"></div>
              <div className="dp-logo-panel">
                <img src="/dentalpro/logo.png" alt="DentalPro" className="dp-logo-img" />
              </div>
              <div className="dp-visual-chip dp-chip-1">
                <span className="dp-chip-icon dp-chip-icon-cyan"><Icon icon="mdi:tooth" /></span>
                <div className="dp-chip-text">
                  <strong>Odontograma 2D/3D</strong>
                  <span>Interactivo por diente</span>
                </div>
              </div>
              <div className="dp-visual-chip dp-chip-2">
                <span className="dp-chip-icon dp-chip-icon-green"><Icon icon="simple-icons:whatsapp" /></span>
                <div className="dp-chip-text">
                  <strong>Recordatorios</strong>
                  <span>Citas por WhatsApp</span>
                </div>
              </div>
              <div className="dp-visual-chip dp-chip-3">
                <span className="dp-chip-icon dp-chip-icon-amber"><Icon icon="mdi:lan-disconnect" /></span>
                <div className="dp-chip-text">
                  <strong>100% offline</strong>
                  <span>Datos locales en tu PC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dp-features reveal reveal-up">
        <div className="container">
          <div className="section-header">
            <span className="badge">FUNCIONALIDADES</span>
            <h2>Todo lo que tu clínica dental necesita</h2>
            <p>Administra cada aspecto de tu consultorio con herramientas diseñadas para clínicas dentales</p>
          </div>

          <div className="dp-features-grid">
            {features.map((f) => (
              <div className="dp-feature-card" key={f.title}>
                <div className="dp-ficon" style={{ background: `${f.color}1A`, color: f.color }}>
                  <Icon icon={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dp-specs reveal reveal-up">
        <div className="container">
          <div className="section-header">
            <span className="badge">ESPECIFICACIONES</span>
            <h2>Características técnicas</h2>
            <p>DentalPro funciona localmente en tu consultorio, sin depender de internet.</p>
          </div>

          <div className="dp-specs-grid">
            {specs.map((s) => (
              <div className="dp-spec-item" key={s.title}>
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

      <section className="dp-download reveal reveal-up">
        <div className="container">
          <div className="dp-download-card">
            <img src="/dentalpro/logo.png" alt="DentalPro" className="dp-download-logo" />

            <div className="section-header">
              <span className="badge">DESCARGA</span>
              <h2>Adquiere DentalPro</h2>
              <p>Pago único de $150 USD (C$5,550). Recibe el instalador .exe y actívalo en tu clínica. Las actualizaciones son gratuitas y no es obligatorio actualizar.</p>
            </div>

            <div className="dp-download-info">
              <div className="dp-dl-item">
                <Icon icon="mdi:application" />
                <span>Instalador .exe</span>
              </div>
              <div className="dp-dl-item">
                <Icon icon="simple-icons:windows" />
                <span>Windows 10 / 11</span>
              </div>
              <div className="dp-dl-item">
                <Icon icon="mdi:chip" />
                <span>4 GB RAM mínimo</span>
              </div>
            </div>

            <a href={WA_BUY} target="_blank" className="dp-btn-primary dp-btn-large">
              <Icon icon="simple-icons:whatsapp" />
              Comprar por WhatsApp
            </a>

            <button onClick={openModal} className="dp-btn-download dp-btn-large">
              <Icon icon="mdi:download" />
              Descargar DentalPro
            </button>

            <p className="dp-dl-help">
              ¿Necesitas ayuda con la instalación?
              <a href={WA_HELP} target="_blank">Contáctanos por WhatsApp</a>
            </p>
          </div>
        </div>
      </section>

      {showModal && (
        <div id="dpPasswordOverlay" className="dp-password-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="dp-password-modal">
            <button className="dp-password-close" aria-label="Cerrar" onClick={closeModal}>
              <Icon icon="mdi:close" />
            </button>
            <div className="dp-password-lock">
              <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="var(--primary)" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            </div>
            <h3>Descarga protegida</h3>
            <p>Ingresa la contraseña que recibiste al adquirir DentalPro para descargar el sistema.</p>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') checkPass(); }}
              ref={inputRef}
            />
            <button className="dp-password-submit" onClick={checkPass}>Descargar</button>
            {error && <p className="dp-pass-error">Contraseña incorrecta</p>}
          </div>
        </div>
      )}
    </>
  );
}
