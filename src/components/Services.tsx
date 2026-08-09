import './Services.css';

const services = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    title: 'Soporte Técnico',
    description: 'Asistencia técnica remota y presencial, mantenimiento de equipos, instalación de sistemas operativos y solución de fallos informáticos.',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`,
    title: 'Desarrollo Web',
    description: 'Creación de sitios web modernos, landing pages y sistemas web a medida para potenciar tu presencia digital.',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'Desarrollo de Software',
    description: 'Soluciones de software personalizadas: sistemas de inventario, facturación, gestión empresarial y más.',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    title: 'Instalación de Software',
    description: 'Instalación y configuración de programas profesionales, Office, herramientas de diseño, antivirus y todo tipo de software.',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    title: 'Licencias de Software',
    description: 'Venta de licencias originales de Microsoft Office, antivirus, Adobe, AutoCAD y más al mejor precio.',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5C7.7 12.8 8 14.5 8 14"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
    title: 'Consultoría TI',
    description: 'Asesoría tecnológica, digitalización de negocios, optimización de procesos y migración a la nube.',
  },
];

export default function Services() {
  return (
    <section className="section" id="servicios" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge reveal reveal-up">Nuestros Servicios</div>
          <h2 className="reveal reveal-up stagger-1">Soluciones tecnológicas integrales</h2>
          <p className="reveal reveal-up stagger-2">Ofrecemos un portafolio completo de servicios tecnológicos para impulsar la transformación digital de tu empresa.</p>
        </div>
        <div className="services-grid">
          {services.map((srv, i) => (
            <article key={srv.title} className={`card spotlight-card glow-card service-card reveal reveal-up stagger-${Math.min(i + 1, 8)}`}>
              <span className="service-num">0{i + 1}</span>
              <div className="service-icon" dangerouslySetInnerHTML={{ __html: srv.icon }}></div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
