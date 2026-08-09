import { Icon } from '@iconify/react';
import './Trabajos.css';

const trabajos = [
  {
    img: '/trabajos/trabajo1.jpg',
    titulo: 'Instalación AutoCAD 2026',
    ciudad: 'Jinotega',
    tiempo: '30 min',
    badge: 'Autodesk instalado correctamente',
  },
  {
    img: '/trabajos/trabajo2.jpg',
    titulo: 'Instalación Office 2024',
    ciudad: 'Managua',
    tiempo: '20 min',
    badge: 'Office listo para usar',
  },
  {
    img: '/trabajos/trabajo3.jpg',
    titulo: 'Instalación Adobe Illustrator',
    ciudad: 'Managua',
    tiempo: '25 min',
    badge: 'Adobe activado',
  },
  {
    img: '/trabajos/antivirus.jpeg',
    titulo: 'Instalación Antivirus McAfee',
    ciudad: 'Managua',
    tiempo: '15 min',
    badge: 'Equipo protegido',
  },
];

export default function Trabajos() {
  return (
    <section className="section" id="trabajos">
      <div className="container">
        <div className="section-header">
          <span className="badge reveal reveal-up">
            <Icon icon="mdi:check-circle" />
            INSTALACIONES RECIENTES
          </span>
          <h2 className="reveal reveal-up stagger-1">Instalaciones reales realizadas</h2>
          <p className="reveal reveal-up stagger-2">Clientes satisfechos en toda Nicaragua — Resultados verificados</p>
        </div>

        <div className="works-grid">
          {trabajos.map((t, i) => (
            <article key={t.titulo} className={`card glow-card work-card reveal reveal-up stagger-${Math.min(i + 1, 10)}`}>
              <div className="work-image">
                <img src={t.img} alt={t.titulo} loading="lazy" />
                <div className="work-status">
                  <Icon icon="mdi:check-decagram" />
                  Instalación completada
                </div>
                <div className="work-overlay">
                  <Icon icon="mdi:shield-check" />
                  <span>{t.badge}</span>
                </div>
              </div>
              <div className="work-content">
                <h3>{t.titulo}</h3>
                <div className="work-meta">
                  <span>
                    <Icon icon="mdi:map-marker" /> {t.ciudad}
                  </span>
                  <span>
                    <Icon icon="mdi:clock-outline" /> {t.tiempo}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
