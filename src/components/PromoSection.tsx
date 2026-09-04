import './PromoSection.css';

export default function PromoSection() {
  return (
    <section className="section promo-banner-section">
      <div className="container">
        <img
          src="/banner.png"
          alt="Ofertas del mes — MKDigital"
          className="promo-banner-img reveal reveal-up"
          loading="eager"
          draggable={false}
        />
      </div>
    </section>
  );
}
