import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import './BannerCarousel.css';

const slides = [
  { src: '/banners/banner-acceso-remoto.jpg', alt: 'Acceso remoto y soporte técnico inmediato — MKDigital' },
  { src: '/banners/banner-desarrollo-web.jpg', alt: 'Realizamos páginas web profesionales para tu negocio — MKDigital' },
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length),
    [],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => window.clearInterval(t);
  }, [paused]);

  return (
    <section className="bc-section" aria-label="Banners promocionales">
      <div className="container">
        <div
          className="banner-carousel reveal reveal-up"
          role="region"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={(e) => {
            touchX.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (touchX.current === null) return;
            const dx = e.clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 40) {
              if (dx < 0) next();
              else prev();
            }
          }}
        >
          <div className="bc-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((s) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                className="bc-slide"
                loading={s === slides[0] ? 'eager' : 'lazy'}
                draggable={false}
              />
            ))}
          </div>

          <button className="bc-arrow bc-prev" onClick={prev} aria-label="Banner anterior">
            <Icon icon="mdi:chevron-left" />
          </button>
          <button className="bc-arrow bc-next" onClick={next} aria-label="Banner siguiente">
            <Icon icon="mdi:chevron-right" />
          </button>

          <div className="bc-dots">
            {slides.map((s, i) => (
              <button
                key={s.src}
                className={`bc-dot${i === index ? ' active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Ir al banner ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
