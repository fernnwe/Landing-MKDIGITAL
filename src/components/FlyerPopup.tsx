import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './FlyerPopup.css';

const OFFERS = [
  {
    nombre: 'Microsoft Office 2024',
    desc: 'Licencia permanente · Full',
    precio: 'C$400',
    old: 'C$720',
    off: '40%',
    icon: 'simple-icons:microsoftoffice',
    color: '#D83B01',
  },
  {
    nombre: 'Pack Adobe 7 Apps',
    desc: 'Elige tus programas',
    precio: 'C$2,000',
    old: 'C$2,500',
    off: '20%',
    icon: 'simple-icons:adobe',
    color: '#FF0000',
  },
  {
    nombre: 'Windows 11 Pro',
    desc: 'Licencia permanente',
    precio: 'C$925',
    old: 'C$1,340',
    off: '20%',
    icon: 'simple-icons:windows',
    color: '#00A4EF',
  },
];

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
          <span className="badge">
            <Icon icon="mdi:fire" />
            OFERTAS DEL MES
          </span>
          <h2>
            Las mejores ofertas<br />
            <span className="text-accent">de esta temporada</span>
          </h2>
          <p>
            Instalación 100% remota, mediante AnyDesk o RustDesk
          </p>
        </div>

        <div className="flyer-offers">
          {OFFERS.map((o) => (
            <div className="flyer-offer" key={o.nombre}>
              <div className="flyer-offer-icon" style={{ background: `${o.color}18` }}>
                <Icon icon={o.icon} color={o.color} style={{ width: 26, height: 26 }} />
              </div>
              <div className="flyer-offer-info">
                <span className="flyer-offer-name">{o.nombre}</span>
                <span className="flyer-offer-desc">{o.desc}</span>
              </div>
              <div className="flyer-offer-price">
                <span className="flyer-offer-old">{o.old}</span>
                <span className="flyer-offer-now">{o.precio}</span>
              </div>
              <span className="flyer-offer-tag">-{o.off}</span>
            </div>
          ))}
        </div>

        <div className="flyer-contact">
          <img src="/ceo.webp" alt="Ing. Fernando Aguirre" className="flyer-contact-img" />
          <div className="flyer-contact-info">
            <strong>Ing. Fernando Aguirre</strong>
            <span>Asesor en software y soporte técnico</span>
          </div>
          <a href="https://wa.me/50581088124" target="_blank" rel="noopener noreferrer" className="flyer-contact-wa">
            <Icon icon="simple-icons:whatsapp" />
          </a>
        </div>

        <div className="flyer-footer">
          <Link to="/catalogo" className="btn-primary" onClick={dismiss}>
            Ver todas las ofertas
            <Icon icon="mdi:arrow-right" />
          </Link>
          <p className="flyer-note">
            <Icon icon="mdi:clock-outline" />
            Precios especiales válidos hasta fin de mes
          </p>
        </div>
      </div>
    </div>
  );
}
