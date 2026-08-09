import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './FlyerPopup.css';

export default function FlyerPopup() {
  const [hidden, setHidden] = useState(
    () => typeof sessionStorage !== 'undefined' && sessionStorage.getItem('flyer-shown') === '1',
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const dismiss = () => {
    setHidden(true);
    sessionStorage.setItem('flyer-shown', '1');
  };

  return (
    <div
      id="flyer-overlay"
      className={`flyer-overlay glass${hidden ? ' flyer-hidden' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div className="flyer-modal card glow-card">
        <button className="flyer-close" aria-label="Cerrar" onClick={dismiss}>
          <Icon icon="mdi:close" />
        </button>

        <div className="flyer-header">
          <span className="badge">OFERTA DEL MES</span>
          <h2>
            Programas para tu PC<br />
            <span className="text-accent">al mejor precio</span>
          </h2>
          <p>
            Office, Adobe, sistemas de facturación, sistemas web,
            antivirus y más — todo 100% original con instalación remota incluida.
          </p>
        </div>

        <div className="flyer-grid">
          <div className="flyer-item">
            <Icon icon="simple-icons:microsoft" color="#00A4EF" />
            <span>Office 2024 / 2021</span>
          </div>
          <div className="flyer-item">
            <Icon icon="mdi:palette" color="#FF0000" />
            <span>Adobe Creative Cloud</span>
          </div>
          <div className="flyer-item">
            <Icon icon="mdi:file-document-outline" color="#818CF8" />
            <span>Facturación Windows</span>
          </div>
          <div className="flyer-item">
            <Icon icon="mdi:globe" color="#22D3EE" />
            <span>Sistemas Web</span>
          </div>
          <div className="flyer-item">
            <Icon icon="mdi:shield-half-full" color="#00C853" />
            <span>Antivirus Premium</span>
          </div>
          <div className="flyer-item">
            <Icon icon="simple-icons:windows" color="#00A4EF" />
            <span>Windows Pro</span>
          </div>
        </div>

        <div className="flyer-contact">
          <img src="/ceo.webp" alt="Ing. Fernando Aguirre" className="flyer-contact-img" />
          <div className="flyer-contact-info">
            <strong>Ing. Fernando Aguirre</strong>
            <span>Asesor en software y soporte técnico</span>
          </div>
          <a href="https://wa.me/50581088124" target="_blank" className="flyer-contact-wa">
            <Icon icon="simple-icons:whatsapp" />
          </a>
        </div>

        <div className="flyer-footer">
          <Link to="/catalogo" className="btn-primary" onClick={dismiss}>
            Ver catálogo completo
            <Icon icon="mdi:arrow-right" />
          </Link>
          <p className="flyer-note">
            <Icon icon="mdi:clock-outline" />
            Promociones válidas hasta fin de mes
          </p>
        </div>
      </div>
    </div>
  );
}
