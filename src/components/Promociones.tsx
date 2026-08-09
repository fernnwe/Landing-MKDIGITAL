import './Promociones.css';

const promociones = [
  { src: '/promociones/1.jpg' },
  { src: '/promociones/2.jpg' },
  { src: '/promociones/3.jpg' },
  { src: '/promociones/4.jpg' },
];

export default function Promociones() {
  return (
    <section className="section promos-section">
      <div className="container">
        <div className="section-header">
          <span className="badge reveal reveal-up">PROMOCIONES</span>
          <h2 className="reveal reveal-up stagger-1">Ofertas especiales</h2>
          <p className="reveal reveal-up stagger-2">Aprovecha nuestros precios exclusivos en software original</p>
        </div>
        <div className="promos-grid">
          {promociones.map((p, i) => (
            <div key={p.src} className={`promo-card reveal reveal-up stagger-${Math.min(i + 1, 4)}`}>
              <div className="promo-img-wrap">
                <span className="promo-discount">-79%</span>
                <img src={p.src} alt={`Promoción ${i + 1}`} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
