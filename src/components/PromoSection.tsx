import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './PromoSection.css';

export default function PromoSection() {
  return (
    <section className="section" id="promociones">
      <div className="container">
        <div className="promo-card glow-card reveal reveal-up">
          <div className="promo-bg">
            <div className="promo-orb promo-orb-1"></div>
            <div className="promo-orb promo-orb-2"></div>
            <div className="promo-orb promo-orb-3"></div>
            <div className="promo-grid-overlay"></div>
          </div>

          <div className="promo-content">
            <div className="badge reveal reveal-down stagger-1">
              <Icon icon="mdi:tag" />
              PROMOCIÓN DEL MES
            </div>

            <h2 className="reveal reveal-up stagger-2">
              Programas para tu PC con
              <span className="text-accent">descuentos exclusivos</span>
            </h2>

            <p className="promo-desc reveal reveal-up stagger-3">
              Promociones solo por este mes en programas para tu PC:
              Office, antivirus, Adobe Creative Cloud y más.
              Aprovecha los mejores precios del año.
            </p>

            <div className="promo-chips reveal reveal-up stagger-4">
              <span className="promo-chip">
                <Icon icon="simple-icons:microsoft" color="#00A4EF" />
                Office 2024/2021
              </span>
              <span className="promo-chip">
                <Icon icon="mdi:shield-half-full" color="#00C853" />
                Antivirus
              </span>
              <span className="promo-chip">
                <Icon icon="simple-icons:adobe" color="#FF0000" />
                Adobe CC
              </span>
              <span className="promo-chip">
                <Icon icon="mdi:hexagon-multiple" color="#E51050" />
                Autodesk
              </span>
              <span className="promo-chip">
                <Icon icon="simple-icons:windows" color="#00A4EF" />
                Windows
              </span>
              <span className="promo-chip">
                <Icon icon="mdi:file-document-outline" color="#818CF8" />
                Facturación
              </span>
            </div>

            <div className="promo-actions reveal reveal-up stagger-5">
              <Link to="/catalogo" className="btn-primary">
                Ver ofertas disponibles
                <Icon icon="mdi:arrow-right" />
              </Link>
              <a href="https://wa.me/50581088124?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20promociones%20de%20este%20mes" target="_blank" className="btn-outline">
                <Icon icon="simple-icons:whatsapp" />
                Consultar por WhatsApp
              </a>
            </div>

            <div className="promo-countdown reveal reveal-up stagger-6">
              <Icon icon="mdi:clock-outline" />
              <span>Ofertas válidas hasta fin de mes — No dejes pasar esta oportunidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
