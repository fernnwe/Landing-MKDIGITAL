import './StatsSection.css';

const stats = [
  { number: '10+', label: 'Años de Experiencia' },
  { number: '200+', label: 'Clientes Satisfechos' },
  { number: '500+', label: 'Proyectos Realizados' },
  { number: '50+', label: 'Soluciones Implementadas' },
];

export default function StatsSection() {
  return (
    <section className="section" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`stat-card reveal reveal-up stagger-${i + 1}`}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
