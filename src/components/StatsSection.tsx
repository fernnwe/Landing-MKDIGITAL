import CountUp from './CountUp';
import './StatsSection.css';

const stats = [
  { value: 10, suffix: '+', label: 'Años de Experiencia' },
  { value: 200, suffix: '+', label: 'Clientes Satisfechos' },
  { value: 500, suffix: '+', label: 'Proyectos Realizados' },
  { value: 50, suffix: '+', label: 'Soluciones Implementadas' },
];

export default function StatsSection() {
  return (
    <section className="section" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`stat-card spotlight-card reveal reveal-up stagger-${i + 1}`}>
              <span className="stat-number">
                <CountUp value={stat.value} suffix={stat.suffix} delay={i * 120} />
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
