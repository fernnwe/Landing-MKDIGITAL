import { Icon } from '@iconify/react';
import './VideoPresentacion.css';

export default function VideoPresentacion() {
  return (
    <section className="section video-section">
      <div className="container">
        <div className="video-card reveal reveal-up">
          <div className="video-header">
            <div className="badge">Presentación</div>
            <h2 className="video-title">¿Necesitas instalar <span className="text-accent">Office</span>?</h2>
            <p className="video-desc">
              Mira esta breve presentación y si necesitas ayuda con la instalación,
              escríbenos directamente por WhatsApp. Estamos listos para asistirte.
            </p>
          </div>

          <div className="video-wrapper">
            <video
              controls
              preload="metadata"
              poster="/productos/office2024.png"
              className="video-player"
            >
              <source src="/instalaroffice.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="video-cta">
            <a
              href="https://wa.me/50581088124?text=Hola%2C+necesito+ayuda+para+instalar+Office"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Icon icon="simple-icons:whatsapp" />
              Instalar Office ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
