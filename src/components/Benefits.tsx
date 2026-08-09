import { Icon } from '@iconify/react';
import './Benefits.css';

export default function Benefits() {
  return (
    <section id="beneficios" className="section benefits-section">
      <div className="container benefits-grid">

        <div className="benefits-image reveal reveal-left">
          <img
            src="/soporte.jpg"
            sizes="(max-width:900px) 100vw, 50vw"
            width="900"
            height="700"
            alt="Soporte remoto MKDigital"
            loading="lazy"
            decoding="async"
            className="benefits-img"
          />
        </div>

        <div className="benefits-content">

          <span className="badge reveal reveal-up">POR QUÉ ELEGIRNOS</span>

          <h2 className="reveal reveal-up stagger-1">Soporte confiable, rápido y profesional</h2>

          <p className="benefits-desc reveal reveal-up stagger-2">
            Brindamos soporte remoto profesional para empresas y usuarios
            que necesitan soluciones inmediatas sin salir de casa.
          </p>

          <div className="benefits-list">

            <div className="card benefit-row reveal reveal-up stagger-3">
              <div className="benefit-icon">
                <Icon icon="mdi:clock-fast" />
              </div>
              <div>
                <h4>Atención inmediata</h4>
                <p>Comenzamos el soporte en minutos vía WhatsApp.</p>
              </div>
            </div>

            <div className="card benefit-row reveal reveal-up stagger-4">
              <div className="benefit-icon">
                <Icon icon="mdi:laptop" />
              </div>
              <div>
                <h4>Servicio 100% remoto</h4>
                <p>Sin traslados, sin perder tiempo.</p>
              </div>
            </div>

            <div className="card benefit-row reveal reveal-up stagger-5">
              <div className="benefit-icon">
                <Icon icon="mdi:cash-multiple" />
              </div>
              <div>
                <h4>Precios accesibles</h4>
                <p>Soluciones profesionales a precios justos.</p>
              </div>
            </div>

            <div className="card benefit-row reveal reveal-up stagger-6">
              <div className="benefit-icon">
                <Icon icon="mdi:account-star" />
              </div>
              <div>
                <h4>Atención personalizada</h4>
                <p>Te guiamos paso a paso durante todo el proceso.</p>
              </div>
            </div>

          </div>

          <div className="benefits-stats reveal reveal-up stagger-7">
            <div><strong>+500</strong><span>Clientes felices</span></div>
            <div><strong>15 min</strong><span>Tiempo de respuesta</span></div>
            <div><strong>100%</strong><span>Remoto</span></div>
          </div>

        </div>
      </div>
    </section>
  );
}
