import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { usePageMeta } from '../hooks/usePageMeta';
import './DentalSoftPage.css';

const WA_BUY =
  'https://wa.me/50581088124?text=Hola%2C%20quiero%20adquirir%20DentalSoft%20(C%245%2C550%20%3D%20%24150%20USD%2C%20pago%20%C3%BAnico%2C%20actualizaciones%20gratuitas)';
const WA_INFO = 'https://wa.me/50581088124?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20DentalSoft';
const WA_HELP = 'https://wa.me/50581088124?text=Hola%2C%20necesito%20ayuda%20para%20instalar%20DentalSoft';

const workflow = [
  { icon: 'mdi:download-circle', step: '01', title: 'Descarga', desc: 'ObtÃ©n el instalador para Windows o Android. La versiÃ³n de escritorio funciona 100% offline.' },
  { icon: 'mdi:cog-play', step: '02', title: 'Configura', desc: 'Registra los datos de tu clÃ­nica, agrega doctores, tratamientos y personaliza los mÃ³dulos.' },
  { icon: 'mdi:tooth', step: '03', title: 'Gestiona', desc: 'Administra pacientes, agenda citas, registra odontogramas, pagos y genera reportes al instante.' },
];

const features = [
  { icon: 'mdi:view-dashboard', color: '#22D3EE', title: 'Dashboard', desc: 'Panel de control con estadÃ­sticas en tiempo real: pacientes, citas del dÃ­a, cobros y movimientos recientes.' },
  { icon: 'mdi:account-heart', color: '#818CF8', title: 'Pacientes', desc: 'Expediente completo: historia clÃ­nica, notas, citas, planes, presupuestos, pagos y odontograma por paciente.' },
  { icon: 'mdi:tooth', color: '#22D3EE', title: 'Odontograma 2D/3D', desc: 'Interactivo por diente: caries, restauraciÃ³n, corona, endodoncia, extracciÃ³n, prÃ³tesis, implante y fractura con giro y zoom en 3D.' },
  { icon: 'mdi:calendar-check', color: '#00C853', title: 'Agenda y Citas', desc: 'Calendario con estados (confirmada, cancelada, pendiente) y recordatorios automÃ¡ticos por WhatsApp.' },
  { icon: 'mdi:shield-account', color: '#818CF8', title: 'Roles y Permisos', desc: 'Acceso por mÃ³dulo: Admin, Doctor y Recepcionista. MenÃºs ocultos segÃºn el permiso del usuario.' },
  { icon: 'mdi:cash', color: '#00C853', title: 'Pagos y Presupuestos', desc: 'Registro de cobros por mÃ©todo de pago y cotizaciones por paciente listas para compartir.' },
  { icon: 'mdi:chart-bar', color: '#22D3EE', title: 'Reportes', desc: 'Ingresos por mÃ©todo de pago, tratamientos mÃ¡s demandados, evoluciÃ³n de pacientes y mÃ¡s.' },
  { icon: 'mdi:database-arrow-up', color: '#818CF8', title: 'Respaldos', desc: 'Copia de seguridad y restauraciÃ³n completa de la base de datos local con un solo clic.' },
];

const specs = [
  { icon: 'mdi:desktop-classic', title: 'Escritorio', desc: 'Windows 10/11, offline' },
  { icon: 'simple-icons:android', title: 'MÃ³vil', desc: 'Android 6.0+, .apk' },
  { icon: 'mdi:database', title: 'BD local', desc: 'Datos en cada equipo' },
  { icon: 'mdi:tooth', title: 'Odontograma', desc: '2D y 3D interactivo' },
  { icon: 'simple-icons:whatsapp', title: 'WhatsApp', desc: 'Recordatorios de citas' },
  { icon: 'mdi:lock', title: 'Seguridad', desc: 'Hash + roles por mÃ³dulo' },
  { icon: 'mdi:reload', title: 'Respaldos', desc: 'Backup y restauraciÃ³n' },
  { icon: 'mdi:account-group', title: 'Multiusuario', desc: 'Admin, Doctor, RecepciÃ³n' },
  { icon: 'mdi:update', title: 'Gratis', desc: 'Actualizaciones sin costo' },
];

export default function DentalSoftPage() {
  usePageMeta(
    'DentalSoft - Sistema para clÃ­nicas dentales | MKDIGITAL',
    'GestiÃ³n integral para tu clÃ­nica dental: pacientes, odontograma 2D/3D, citas con recordatorios por WhatsApp, pagos y reportes. DentalSoft para Windows y Android.',
    'https://mkdigitalnic.com/DentalSoft/logo.png',
  );

  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [downloadTarget, setDownloadTarget] = useState<'windows' | 'android'>('windows');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const openModal = (target: 'windows' | 'android' = 'windows') => {
    setError(false);
    setPassword('');
    setDownloadTarget(target);
    setShowModal(true);
    window.setTimeout(() => inputRef.current?.focus(), 50);
  };

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else closeModal();
      }
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') setLightboxIndex((i) => (i !== null ? (i % 8) + 1 : null));
        if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i !== null ? ((i - 2 + 8) % 8) + 1 : null));
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  const checkPass = () => {
    if (password === 'mkdigital2026$') {
      setShowModal(false);
      const a = document.createElement('a');
      if (downloadTarget === 'android') {
        a.href = '/DentalSoft/DentalSoft-1.0.0.apk';
        a.download = 'DentalSoft-1.0.0.apk';
      } else {
        a.href = '/DentalSoft/DentalSoftSetup-1.0.0.exe';
        a.download = 'DentalSoftSetup-1.0.0.exe';
      }
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
      {/* ===================== HERO ===================== */}
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
              <span className="badge dp-hero-badge"><Icon icon="mdi:tooth" /> SISTEMA PARA CLÃNICAS DENTALES</span>
              <h1 className="dp-hero-title">Dental<span>Pro</span></h1>
              <p className="dp-hero-desc">
                GestiÃ³n integral para tu clÃ­nica dental: pacientes con expediente completo,
                odontograma interactivo 2D y 3D, agenda de citas con recordatorios por WhatsApp,
                pagos, presupuestos y reportes.
              </p>

              <div className="dp-hero-meta">
                <div className="dp-version-badge">
                  <span className="dp-version-dot"></span>
                  VersiÃ³n 1.0.0
                </div>
                <div className="dp-platform-badge">
                  <Icon icon="simple-icons:windows" />
                  <Icon icon="simple-icons:android" />
                  Windows &amp; Android
                </div>
              </div>

              <div className="dp-hero-price-row">
                <div className="dp-price-badge">
                  <span className="dp-price-amount">$150</span>
                  <span className="dp-price-sep">/</span>
                  <span className="dp-price-usd">C$5,550</span>
                  <span className="dp-price-label">Pago Ãºnico</span>
                </div>
              </div>

              <div className="dp-hero-actions">
                <a href={WA_BUY} target="_blank" className="dp-btn-primary">
                  <Icon icon="mdi:cart" />
                  Adquirir DentalSoft
                </a>
                <a href={WA_INFO} target="_blank" className="dp-btn-secondary">
                  <Icon icon="simple-icons:whatsapp" />
                  Consultar
                </a>
              </div>

              <p className="dp-update-note">
                <Icon icon="mdi:check-decagram" />
                Actualizaciones gratuitas de por vida â€” no es obligatorio actualizar.
              </p>
            </div>

            <div className="dp-hero-visual">
              <div className="dp-glow"></div>
              <div className="dp-logo-ring">
                <div className="dp-ring-dot dp-ring-dot-1"></div>
                <div className="dp-ring-dot dp-ring-dot-2"></div>
                <div className="dp-ring-dot dp-ring-dot-3"></div>
              </div>
              <div className="dp-logo-panel">
                <img src="/DentalSoft/logo.png" alt="DentalSoft" className="dp-logo-img" />
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
                <span className="dp-chip-icon dp-chip-icon-amber"><Icon icon="mdi:shield-check" /></span>
                <div className="dp-chip-text">
                  <strong>Datos seguros</strong>
                  <span>100% locales y offline</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dp-hero-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="var(--surface-container)">
            <path d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <section className="dp-trust reveal reveal-up">
        <div className="container">
          <div className="dp-trust-grid">
            <div className="dp-trust-item">
              <Icon icon="mdi:laptop" />
              <div>
                <strong>Escritorio y MÃ³vil</strong>
                <span>Windows + Android</span>
              </div>
            </div>
            <div className="dp-trust-divider"></div>
            <div className="dp-trust-item">
              <Icon icon="mdi:lan-disconnect" />
              <div>
                <strong>100% Offline</strong>
                <span>Sin depender de internet</span>
              </div>
            </div>
            <div className="dp-trust-divider"></div>
            <div className="dp-trust-item">
              <Icon icon="mdi:update" />
              <div>
                <strong>Actualizaciones Gratis</strong>
                <span>De por vida, sin costo</span>
              </div>
            </div>
            <div className="dp-trust-divider"></div>
            <div className="dp-trust-item">
              <Icon icon="mdi:credit-card" />
              <div>
                <strong>Pago Ãšnico</strong>
                <span>$150 USD â€” sin mensualidades</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WORKFLOW ===================== */}
      <section className="dp-workflow reveal reveal-up">
        <div className="container">
          <div className="section-header">
            <span className="badge">CÃ“MO FUNCIONA</span>
            <h2>En 3 pasos tienes tu clÃ­nica gestionada</h2>
            <p>De la instalaciÃ³n al primer paciente en menos de 10 minutos.</p>
          </div>
          <div className="dp-workflow-grid">
            {workflow.map((w, i) => (
              <div className="dp-workflow-card" key={w.step}>
                <div className="dp-workflow-number">{w.step}</div>
                <div className="dp-workflow-icon">
                  <Icon icon={w.icon} />
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                {i < workflow.length - 1 && <div className="dp-workflow-arrow"><Icon icon="mdi:chevron-right" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="dp-features reveal reveal-up">
        <div className="container">
          <div className="section-header">
            <span className="badge">FUNCIONALIDADES</span>
            <h2>Todo lo que tu clÃ­nica dental necesita</h2>
            <p>Herramientas diseÃ±adas para que tu consultorio funcione sin complicaciones</p>
          </div>

          <div className="dp-features-grid">
            {features.map((f, i) => (
              <div className={`dp-feature-card spotlight-card glow-card reveal reveal-up stagger-${Math.min(i + 1, 8)}`} key={f.title}>
                <div className="dp-ficon" style={{ background: `${f.color}14`, color: f.color }}>
                  <Icon icon={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== GALLERY ===================== */}
      <section className="dp-gallery reveal reveal-up">
        <div className="container">
          <div className="section-header">
            <span className="badge">CAPTURAS</span>
            <h2>AsÃ­ se ve DentalSoft</h2>
            <p>Interfaz moderna, intuitiva y profesional. DiseÃ±ada para uso diario en clÃ­nica.</p>
          </div>
          <div className="dp-gallery-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div className={`dp-gallery-item reveal reveal-up stagger-${Math.min(n, 8)}`} key={n} onClick={() => setLightboxIndex(n)} role="button" tabIndex={0}>
                <img src={`/DentalSoft/screenshot-${n}.png`} alt={`DentalSoft - Captura ${n}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SPECS ===================== */}
      <section className="dp-specs reveal reveal-up">
        <div className="container">
          <div className="section-header">
            <span className="badge">ESPECIFICACIONES</span>
            <h2>CaracterÃ­sticas tÃ©cnicas</h2>
            <p>DentalSoft funciona localmente en tu consultorio, sin depender de internet.</p>
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

      {/* ===================== DOWNLOAD ===================== */}
      <section className="dp-download reveal reveal-up">
        <div className="container">
          <div className="dp-download-grid">
            <div className="dp-dl-pricing">
              <img src="/DentalSoft/logo.png" alt="DentalSoft" className="dp-download-logo" />
              <h2>DentalSoft</h2>
              <p className="dp-dl-tagline">Sistema de gestiÃ³n para clÃ­nicas dentales</p>

              <div className="dp-dl-price-block">
                <div className="dp-dl-price-main">
                  <span className="dp-dl-dollar">$150</span>
                  <span className="dp-dl-currency">USD</span>
                </div>
                <span className="dp-dl-price-cord">C$5,550</span>
                <span className="dp-dl-price-type">Pago Ãºnico</span>
              </div>

              <ul className="dp-dl-perks">
                <li><Icon icon="mdi:check-circle" /> Actualizaciones gratuitas de por vida</li>
                <li><Icon icon="mdi:check-circle" /> Sin mensualidades ni costos ocultos</li>
                <li><Icon icon="mdi:check-circle" /> Soporte tÃ©cnico incluido</li>
                <li><Icon icon="mdi:check-circle" /> Funciona sin conexiÃ³n a internet</li>
              </ul>

              <a href={WA_BUY} target="_blank" className="dp-btn-primary dp-btn-wide">
                <Icon icon="simple-icons:whatsapp" />
                Comprar por WhatsApp
              </a>
            </div>

            <div className="dp-dl-downloads">
              <h3>Descargar</h3>
              <p className="dp-dl-downloads-desc">Selecciona tu plataforma para descargar DentalSoft.</p>

              <button onClick={() => openModal('windows')} className="dp-dl-platform-card">
                <Icon icon="simple-icons:windows" className="dp-dl-platform-icon dp-dl-win-icon" />
                <div className="dp-dl-platform-info">
                  <strong>Windows 10 / 11</strong>
                  <span>Instalador .exe Â· 4 GB RAM mÃ­nimo</span>
                </div>
                <Icon icon="mdi:download" className="dp-dl-platform-arrow" />
              </button>

              <button onClick={() => openModal('android')} className="dp-dl-platform-card dp-dl-android-card">
                <Icon icon="simple-icons:android" className="dp-dl-platform-icon dp-dl-android-icon" />
                <div className="dp-dl-platform-info">
                  <strong>Android 6.0+</strong>
                  <span>Archivo .apk Â· InstalaciÃ³n directa</span>
                </div>
                <Icon icon="mdi:download" className="dp-dl-platform-arrow" />
              </button>

              <p className="dp-dl-help">
                Â¿Necesitas ayuda con la instalaciÃ³n?
                <a href={WA_HELP} target="_blank"> ContÃ¡ctanos por WhatsApp</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PASSWORD MODAL ===================== */}
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
            <p>{downloadTarget === 'android'
              ? 'Ingresa la contraseÃ±a para descargar DentalSoft para Android (.apk).'
              : 'Ingresa la contraseÃ±a para descargar DentalSoft para Windows (.exe).'
            }</p>
            <input
              type="password"
              placeholder="ContraseÃ±a"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') checkPass(); }}
              ref={inputRef}
            />
            <button className="dp-password-submit" onClick={checkPass}>Descargar</button>
            {error && <p className="dp-pass-error">ContraseÃ±a incorrecta</p>}
          </div>
        </div>
      )}
      {/* ===================== LIGHTBOX ===================== */}
      {lightboxIndex !== null && (
        <div className="dp-lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="dp-lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Cerrar">
            <Icon icon="mdi:close" />
          </button>
          <button className="dp-lightbox-arrow dp-lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightboxIndex(((lightboxIndex - 2 + 8) % 8) + 1); }} aria-label="Anterior">
            <Icon icon="mdi:chevron-left" />
          </button>
          <img
            src={`/DentalSoft/screenshot-${lightboxIndex}.png`}
            alt={`DentalSoft - Captura ${lightboxIndex}`}
            className="dp-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="dp-lightbox-arrow dp-lightbox-next" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex % 8) + 1); }} aria-label="Siguiente">
            <Icon icon="mdi:chevron-right" />
          </button>
          <div className="dp-lightbox-counter">{lightboxIndex} / 8</div>
        </div>
      )}
    </>
  );
}
