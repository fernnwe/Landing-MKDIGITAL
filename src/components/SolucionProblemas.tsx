import { Icon } from '@iconify/react';
import './SolucionProblemas.css';

const soluciones = [
  {
    icon: 'mdi:monitor-dashboard',
    iconClass: 'viper',
    tag: 'Demo Online',
    title: 'Probar ViperPOS',
    desc: 'Explora el sistema completo sin instalar nada. Acceso inmediato desde el navegador.',
    href: 'https://www.viperpos.net/login/',
    btnText: 'Acceder a la demo',
    btnIcon: 'mdi:open-in-new',
    creds: true,
    featured: true,
  },
  {
    icon: 'mdi:cash-register',
    iconClass: 'facturacion',
    tag: '+34 videos',
    title: 'Sistema de Facturación',
    desc: 'Capacitación completa del software, módulos y flujo de trabajo real.',
    href: 'https://drive.google.com/drive/folders/1184xu1s4eirYN83QzL4Wfpsu_K3-Hqqs?usp=sharing',
    btnText: 'Ver tutoriales',
    btnIcon: 'mdi:play-circle',
  },
  {
    icon: 'mdi:server-network',
    iconClass: 'autocad',
    tag: 'Solución oficial',
    title: 'Servidor AutoCAD en Red',
    desc: 'Guía paso a paso para corregir el error del servidor de licencias.',
    href: 'https://drive.google.com/file/d/1jmlTTqccF4oUPupTYNCwNW_qZrrK8CwA/view?usp=sharing',
    btnText: 'Ver solución',
    btnIcon: 'mdi:play-circle',
  },
  {
    icon: 'mdi:headset',
    iconClass: 'soporte',
    tag: 'Soporte remoto',
    title: 'Conexión con AnyDesk',
    desc: 'Aprende a instalar AnyDesk y recibir soporte inmediato.',
    href: 'https://drive.google.com/file/d/17cp_besLdN9NnNC1BpB9ox5oZVscdHLS/view?usp=sharing',
    btnText: 'Ver guía',
    btnIcon: 'mdi:play-circle',
  },
  {
    icon: 'mdi:laptop',
    iconClass: 'demo-icon',
    tag: 'Caso real',
    title: 'Demo del sistema',
    desc: 'Mira el software funcionando con clientes reales.',
    href: 'https://drive.google.com/file/d/1KjQ6-bD081vYcvX9h4eXr96nqyow17jM/view?usp=sharing',
    btnText: 'Ver demostración',
    btnIcon: 'mdi:play-circle',
  },
  {
    icon: 'mdi:cellphone-arrow-down',
    iconClass: 'descarga',
    tag: 'Android',
    title: 'Descargar FactuLite',
    desc: 'Instala el demo en tu celular y prueba el sistema gratis.',
    href: 'https://factulite.net/downloads/factulite-v1.5.0.apk',
    btnText: 'Descargar demo',
    btnIcon: 'mdi:download',
  },
];

export default function SolucionProblemas() {
  return (
    <section className="section soluciones-section">
      <div className="container">
        <div className="section-header">
          <span className="badge reveal reveal-up">CENTRO DE AYUDA</span>
          <h2 className="reveal reveal-up stagger-1">Videos, descargas y soluciones paso a paso</h2>
          <p className="reveal reveal-up stagger-2">
            Accede a demostraciones, guías y recursos para instalar, solucionar errores y conectar
            tu equipo con soporte remoto.
          </p>
        </div>

        <div className="soluciones-grid">
          {soluciones.map((s, i) => (
            <div className={`card glow-card solution-card reveal reveal-up stagger-${Math.min(i + 3, 8)}${s.featured ? ' featured' : ''}`} key={s.title}>
              {s.featured && <div className="featured-chip">⭐ DEMO DESTACADA</div>}

              <div className={`solution-icon ${s.iconClass}`}>
                <Icon icon={s.icon} />
              </div>

              <span className="solution-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>

              <a href={s.href} target="_blank" className="solution-btn">
                {s.btnText} <Icon icon={s.btnIcon} />
              </a>

              {s.creds && (
                <div className="solution-creds">
                  Usuario: <b>demo</b>
                  <br />
                  Contraseña: <b>demo1234</b>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
