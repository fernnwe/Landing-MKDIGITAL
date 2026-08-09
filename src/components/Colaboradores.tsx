import './Colaboradores.css';

const colaboradores = [
  { name: 'Fernando Aguirre', image: '/ceo.webp', role: 'CEO & Fundador' },
  { name: 'Alvaro Delgado', image: '/colaboradores/alvaro-delgado.jpg', role: 'Soporte TI' },
  { name: 'Ernesto Schwartz', image: '/colaboradores/ernesto-schwartz.jpg', role: 'Soporte TI' },
];

export default function Colaboradores() {
  return (
    <section className="section" id="colaboradores">
      <div className="container">
        <div className="section-header">
          <div className="badge reveal reveal-up">Colaboradores</div>
          <h2 className="reveal reveal-up stagger-1">Encargados de darte un buen servicio</h2>
        </div>
        <div className="colab-grid">
          {colaboradores.map((colab, i) => (
            <div key={colab.name} className={`card spotlight-card colab-card reveal reveal-up stagger-${Math.min(i + 1, 8)}`}>
              <div className="colab-avatar-wrap">
                <img src={colab.image} alt={colab.name} className="colab-img" />
              </div>
              <span className="colab-name">{colab.name}</span>
              <span className="colab-role">{colab.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
