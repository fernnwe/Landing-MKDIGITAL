import { Icon } from '@iconify/react';
import './FAQ.css';

const Chevron = () => (
  <svg className="chevron" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
  </svg>
);

const faqs = [
  {
    icon: 'mdi:laptop',
    question: '¿Cómo se conectan a mi computadora?',
    body: (
      <p>
        Nos conectamos de forma segura mediante <strong>AnyDesk</strong> o{' '}
        <strong>TeamViewer</strong>. Solo debes abrir el programa y compartir el ID temporal.
        <strong>Tú puedes ver todo el proceso en tiempo real y cerrar la conexión cuando quieras.</strong>
      </p>
    ),
    apps: true,
  },
  {
    icon: 'mdi:shield-lock',
    question: '¿Es seguro el soporte remoto?',
    body: (
      <p>
        Sí. La conexión es <strong>temporal, cifrada y privada</strong>. No tenemos acceso a tu PC
        sin tu permiso y la sesión se cierra automáticamente al finalizar.
      </p>
    ),
  },
  {
    icon: 'mdi:microsoft-windows',
    question: '¿Los sistemas funcionan en Mac?',
    body: (
      <p>
        Nuestros sistemas están <strong>optimizados para Windows</strong>. La versión para MacOS se
        encuentra <strong>próximamente</strong>.
      </p>
    ),
  },
  {
    icon: 'mdi:cash-register',
    question: '¿Qué es FactuLite?',
    body: (
      <p>
        <strong>FactuLite</strong> es un software para android. Incluye control de inventario,
        ventas, clientes y reportes. No necesitas conexión a internet.
      </p>
    ),
  },
  {
    icon: 'mdi:web',
    question: '¿Qué es ViperPOS?',
    body: (
      <p>
        <strong>ViperPOS</strong> es el sistema POS en la nube Multisucursal. Puedes usarlo desde
        cualquier navegador sin instalar nada.
      </p>
    ),
  },
  {
    icon: 'mdi:map-marker',
    question: '¿Dónde están ubicados?',
    body: (
      <p>
        Trabajamos <strong>100% remoto</strong>. Atendemos clientes en toda Nicaragua.
      </p>
    ),
  },
  {
    icon: 'mdi:clock-outline',
    question: '¿Cuánto tarda la instalación?',
    body: (
      <p>
        La mayoría de instalaciones tardan entre <strong>20 y 40 minutos</strong>.
      </p>
    ),
  },
  {
    icon: 'mdi:shield-check',
    question: '¿Cuánta garantía ofrecen?',
    body: (
      <p>
        Todas nuestras instalaciones incluyen <strong>1 semana de garantía</strong> por soporte
        técnico.
      </p>
    ),
  },
  {
    icon: 'mdi:cash-multiple',
    question: '¿Los precios están en córdobas o dólares?',
    body: (
      <p>
        Los precios están en <strong>Córdobas (NIO)</strong>, pero puedes pagar en dólares.
      </p>
    ),
  },
  {
    icon: 'mdi:credit-card-check',
    question: '¿Cuándo se realiza el pago?',
    body: (
      <p>
        El pago se realiza <strong>al finalizar la instalación</strong>. Pagas únicamente cuando el
        trabajo esté terminado.
      </p>
    ),
  },
  {
    icon: 'mdi:bank',
    question: 'Métodos de pago disponibles',
    body: (
      <div className="payment-info">
        <div className="payment-section">
          <h4>Titular</h4>
          <p>Fernando Yassir Aguirre Cardoza</p>
        </div>

        <div className="payment-section">
          <h4>Cuentas en Córdobas (NIO)</h4>
          <ul>
            <li><strong>BAC:</strong> 373215029</li>
            <li><strong>LAFISE:</strong> 138091328</li>
            <li><strong>BANPRO:</strong> 10023200152542</li>
          </ul>
        </div>

        <div className="payment-section">
          <h4>Cuentas en Dólares (USD)</h4>
          <ul>
            <li><strong>BANPRO:</strong> 10023210118576</li>
            <li><strong>LAFISE:</strong> 133283355</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header">
          <span className="badge reveal reveal-up">PREGUNTAS FRECUENTES</span>
          <h2 className="reveal reveal-up stagger-1">Resolvemos tus dudas</h2>
          <p className="reveal reveal-up stagger-2">
            Todo lo que necesitas saber antes de solicitar soporte remoto
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className={`faq-item card reveal reveal-up stagger-${Math.min(i + 3, 10)}`} key={f.question}>
              <summary>
                <Icon icon={f.icon} />
                <span>{f.question}</span>
                <Chevron />
              </summary>
              <div className="faq-body">
                {f.body}
                {f.apps && (
                  <div className="faq-apps">
                    <span className="faq-app">
                      <Icon icon="simple-icons:anydesk" /> AnyDesk
                    </span>
                    <span className="faq-app">
                      <Icon icon="simple-icons:teamviewer" /> TeamViewer
                    </span>
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
