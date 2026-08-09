import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import CountUp from './CountUp';
import './Hero.css';

const rotatingWords = ['licencias originales', 'instalación remota', 'sistemas a medida', 'soporte inmediato'];

const terminalLines = [
  { text: '$ mkdigital init --servicio', color: 'cmd' },
  { text: '> Conectando vía AnyDesk...', color: 'ok' },
  { text: '> Instalando Office 2024 Pro Plus', color: 'ok' },
  { text: '> Activando licencia original...', color: 'ok' },
  { text: '> Licencia válida — 100% original', color: 'success' },
  { text: '> Cliente verificado por WhatsApp', color: 'ok' },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [wordIdx, setWordIdx] = useState(0);
  const [lines, setLines] = useState<number[]>([]);
  const [current, setCurrent] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = heroRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--px', String(x));
      el.style.setProperty('--py', String(y));
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const t = window.setInterval(() => setWordIdx((i) => (i + 1) % rotatingWords.length), 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let timer = 0;
    let lineIdx = 0;
    let char = 0;

    const typeNext = () => {
      const line = terminalLines[lineIdx].text;
      if (char < line.length) {
        char += 1;
        setCurrent(line.slice(0, char));
        timer = window.setTimeout(typeNext, 12 + Math.random() * 28);
      } else {
        setLines((prev) => [...prev, lineIdx]);
        setCurrent('');
        char = 0;
        lineIdx += 1;
        if (lineIdx >= terminalLines.length) {
          setTyping(false);
          timer = window.setTimeout(() => {
            setLines([]);
            setTyping(true);
            lineIdx = 0;
            char = 0;
            timer = window.setTimeout(typeNext, 700);
          }, 3200);
        } else {
          timer = window.setTimeout(typeNext, 320);
        }
      }
    };

    timer = window.setTimeout(typeNext, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-aurora"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content container">
        <div className="hero-text">
          <div className="badge hero-badge reveal reveal-up">
            <span className="badge-dot"></span>
            Transformación Digital
          </div>
          <h1 className="hero-title reveal reveal-up stagger-1">
            Innovación digital que impulsa tu <span className="text-accent">negocio al futuro</span>
          </h1>
          <p className="hero-subtitle reveal reveal-up stagger-2">
            Somos una empresa tecnológica especializada en licencias de software original,
            instalación de programas, desarrollo de sistemas a medida y soporte técnico remoto
            en toda Nicaragua.
          </p>
          <p className="hero-type reveal reveal-up stagger-3" aria-hidden="true">
            <span className="type-label">Especialistas en&nbsp;</span>
            <span key={wordIdx} className="type-word">
              {rotatingWords[wordIdx]}
            </span>
            <span className="type-cursor">_</span>
          </p>
          <div className="hero-actions reveal reveal-up stagger-4">
            <a href="#servicios" className="btn-primary">
              Nuestros Servicios
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="https://wa.me/50581088124" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Contáctanos
            </a>
          </div>
          <div className="hero-stats reveal reveal-up stagger-5">
            <div className="hero-stat">
              <span className="hero-stat-number">
                +<CountUp value={10} />
              </span>
              <span className="hero-stat-label">Años de experiencia</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">
                +<CountUp value={200} delay={150} />
              </span>
              <span className="hero-stat-label">Clientes satisfechos</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">
                +<CountUp value={500} delay={300} />
              </span>
              <span className="hero-stat-label">Proyectos realizados</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal reveal-scale stagger-2">
          <div className="hero-console-wrap">
            <div className="terminal-glow"></div>
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="terminal-title">mkdigital@remote: ~</span>
                <span className="terminal-status">
                  <span className="status-dot"></span> online
                </span>
              </div>
              <div className="terminal-body">
                <div className="terminal-prompt-line">
                  <span className="prompt-sign">$</span>
                  <span className="prompt-cmd">mkdigital --help</span>
                </div>
                {lines.map((idx) => (
                  <p key={idx} className={`t-line t-${terminalLines[idx].color}`}>
                    {terminalLines[idx].text}
                  </p>
                ))}
                {typing && (
                  <p className={`t-line t-${terminalLines[lines.length]?.color ?? 'ok'}`}>
                    {current}
                    <span className="t-cursor"></span>
                  </p>
                )}
                {!typing && (
                  <p className="t-line t-success">
                    ✓ Servicio completado en tiempo récord
                    <span className="t-cursor"></span>
                  </p>
                )}
              </div>
            </div>

            <div className="float-chip chip-1">
              <span className="chip-icon chip-icon-cyan"><Icon icon="simple-icons:microsoftoffice" /></span>
              <div className="chip-text">
                <strong>Office 2024</strong>
                <span>Instalado y activado</span>
              </div>
            </div>
            <div className="float-chip chip-2">
              <span className="chip-icon chip-icon-green"><Icon icon="mdi:shield-check" /></span>
              <div className="chip-text">
                <strong>Licencia 100% original</strong>
                <span>Verificada</span>
              </div>
            </div>
            <div className="float-chip chip-3">
              <span className="chip-icon chip-icon-amber"><Icon icon="simple-icons:whatsapp" /></span>
              <div className="chip-text">
                <strong>Soporte remoto</strong>
                <span>Respuesta en minutos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="var(--background)">
          <path d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}
