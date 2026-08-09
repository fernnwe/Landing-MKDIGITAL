import { useEffect, useRef } from 'react';
import './GrowthStats.css';

const bars = [
  { value: 15, label: '2023' },
  { value: 25, label: 'Mar 23' },
  { value: 40, label: 'Jun 23' },
  { value: 60, label: 'Sep 23' },
  { value: 80, label: 'Dic 23' },
  { value: 100, label: 'Mar 24' },
  { value: 120, label: 'Jun 24' },
  { value: 140, label: 'Sep 24' },
  { value: 165, label: 'Hoy', highlight: true },
];

export default function GrowthStats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const counters = section.querySelectorAll('.growth-stat-card h3');
    const barEls = section.querySelectorAll('.bar');

    function animateCounter(el: Element) {
      const target = parseFloat(el.getAttribute('data-target') || '0');
      let current = 0;
      const increment = target / 100;
      function update() {
        current += increment;
        if (current < target) {
          el.textContent = current.toFixed(target % 1 ? 1 : 0);
          requestAnimationFrame(update);
        } else {
          el.textContent = String(target);
        }
      }
      update();
    }

    function animateBars() {
      barEls.forEach((bar) => {
        const value = parseInt(bar.getAttribute('data-value') || '0', 10);
        (bar as HTMLElement).style.height = value * 1.6 + 'px';
        bar.setAttribute('data-label', String(value));
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach(animateCounter);
            animateBars();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section growth-section" id="crecimiento" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="badge reveal reveal-up">NUESTROS RESULTADOS</span>
          <h2 className="reveal reveal-up stagger-1">Crecimiento constante desde 2023</h2>
          <p className="reveal reveal-up stagger-2">
            Cada mes ayudamos a más clientes en toda Nicaragua con instalaciones
            remotas rápidas y seguras.
          </p>
        </div>

        <div className="growth-stats-grid">
          <div className="card glow-card growth-stat-card reveal reveal-up stagger-3">
            <h3 data-target="520">0</h3>
            <span>Instalaciones realizadas</span>
          </div>
          <div className="card glow-card growth-stat-card reveal reveal-up stagger-4">
            <h3 data-target="340">0</h3>
            <span>Clientes atendidos</span>
          </div>
          <div className="card glow-card growth-stat-card reveal reveal-up stagger-5">
            <h3 data-target="4.9">0</h3>
            <span>Calificación promedio</span>
          </div>
          <div className="card glow-card growth-stat-card reveal reveal-up stagger-6">
            <h3 data-target="18">0</h3>
            <span>Meses creciendo</span>
          </div>
        </div>

        <div className="card chart-container reveal reveal-up stagger-7">
          <h3>Crecimiento mensual de servicios</h3>

          <div className="chart">
            {bars.map((b) => (
              <div className="bar-group" key={b.label}>
                <div className={`bar${b.highlight ? ' highlight' : ''}`} data-value={b.value}></div>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
