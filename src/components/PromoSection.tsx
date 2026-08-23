import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './PromoSection.css';

const WA_PROMO =
  'https://wa.me/50581088124?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20promociones%20de%20este%20mes';

const deals = [
  { iconId: 'mdi:microsoft-office', color: '#D83B01', name: 'Office 2024/2021', sub: 'Word, Excel, PowerPoint y más', priceLabel: 'desde C$350', old: null, off: '-20%' },
  { iconId: 'mdi:shield-check', color: '#00C853', name: 'Antivirus', sub: 'McAfee · Avast · ESET · Kaspersky', priceLabel: 'desde C$740', old: null, off: null },
  { iconId: 'simple-icons:adobe', color: '#FF0000', name: 'Adobe CC', sub: 'Pack 3 Apps — Ps · Ai · Pr', priceLabel: 'C$1,000', old: 'C$1,300', off: '-23%' },
  { iconId: 'simple-icons:autodesk', color: '#E51050', name: 'Autodesk', sub: 'AutoCAD · Revit 2026 full', priceLabel: 'desde C$500', old: 'C$650', off: '-23%' },
  { iconId: 'simple-icons:windows', color: '#00A4EF', name: 'Windows', sub: '10/11 Pro · activación permanente', priceLabel: 'C$925', old: 'C$1,340', off: '-20%' },
  { iconId: 'mdi:receipt-text', color: '#818CF8', name: 'Facturación', sub: 'FactuLite · ViperPOS · Escritorio', priceLabel: 'desde C$2,000', old: 'C$2,500', off: '-20%' },
];

function getMonthEnd(): number {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999).getTime();
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function PromoSection() {
  const [left, setLeft] = useState({ d: '--', h: '--', m: '--', s: '--' });

  useEffect(() => {
    const target = getMonthEnd();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setLeft({
        d: pad(Math.floor(diff / 86_400_000)),
        h: pad(Math.floor(diff / 3_600_000) % 24),
        m: pad(Math.floor(diff / 60_000) % 60),
        s: pad(Math.floor(diff / 1000) % 60),
      });
    };
    tick();
    const t = window.setInterval(tick, 1000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section className="section" id="promociones">
      <div className="container">
        <div className="promo-flyer reveal reveal-up">
          <div className="promo-flyer-bg" aria-hidden="true">
            <div className="promo-orb promo-orb-1"></div>
            <div className="promo-orb promo-orb-2"></div>
            <div className="promo-grid-overlay"></div>
          </div>

          <div className="pf-burst" aria-hidden="true">
            <div className="pf-burst-inner">
              MEJORES
              <br />
              PRECIOS
              <br />
              DEL AÑO
            </div>
          </div>

          <div className="promo-flyer-grid">
            {/* ===== Left: headline ===== */}
            <div className="pf-info">
              <span className="badge pf-badge reveal reveal-down stagger-1">
                <Icon icon="mdi:tag" />
                PROMOCIÓN DEL MES
              </span>

              <h2 className="reveal reveal-up stagger-2">
                Programas para tu PC con
                <span className="text-accent">descuentos exclusivos</span>
              </h2>

              <p className="pf-desc reveal reveal-up stagger-3">
                Promociones solo por este mes en programas para tu PC:
                Office, antivirus, Adobe Creative Cloud y más.
                Aprovecha los mejores precios del año.
              </p>

              <div className="pf-countdown reveal reveal-up stagger-4" role="timer" aria-label="Tiempo restante de la promoción">
                {[
                  { v: left.d, l: 'días' },
                  { v: left.h, l: 'horas' },
                  { v: left.m, l: 'min' },
                  { v: left.s, l: 'seg' },
                ].map((u) => (
                  <div className="pf-count-unit" key={u.l}>
                    <b>{u.v}</b>
                    <span>{u.l}</span>
                  </div>
                ))}
              </div>

              <div className="promo-actions reveal reveal-up stagger-5">
                <Link to="/catalogo" className="btn-primary">
                  Ver ofertas disponibles
                  <Icon icon="mdi:arrow-right" />
                </Link>
                <a href={WA_PROMO} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Icon icon="simple-icons:whatsapp" />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>

            {/* ===== Right: ticket stub with deals ===== */}
            <div className="pf-stub reveal reveal-up stagger-3">
              <div className="pf-stub-header">
                <Icon icon="mdi:scissors" className="pf-scissors" />
                <span>OFERTAS DESTACADAS</span>
              </div>

              <div className="pf-deals">
                {deals.map((d) => (
                  <Link to="/catalogo" className="pf-deal" key={d.name}>
                    {d.off && <span className="pf-deal-off">{d.off}</span>}
                    <span className="pf-deal-icon" style={{ background: `${d.color}14`, color: d.color }}>
                      <Icon icon={d.iconId} />
                    </span>
                    <span className="pf-deal-body">
                      <strong>{d.name}</strong>
                      <small>{d.sub}</small>
                      <span className="pf-deal-price">
                        <b>{d.priceLabel}</b>
                        {d.old && <s>{d.old}</s>}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pf-footer-note">
            <Icon icon="mdi:clock-outline" />
            <span>Ofertas válidas hasta fin de mes — No dejes pasar esta oportunidad</span>
          </div>
        </div>
      </div>
    </section>
  );
}
