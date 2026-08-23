import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import './DownloadAnyDesk.css';

const randomId = () =>
  Array.from({ length: 3 }, () =>
    String(Math.floor(100 + Math.random() * 900)),
  ).join(' ');

const randomPass = () => String(Math.floor(1000 + Math.random() * 9000));

export default function DownloadAnyDesk() {
  const [activeTab, setActiveTab] = useState<'anydesk' | 'teamviewer'>('anydesk');
  const [adId, setAdId] = useState(randomId);
  const [adPass, setAdPass] = useState(randomPass);
  const [idFlip, setIdFlip] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIdFlip(true);
      window.setTimeout(() => {
        setAdId(randomId());
        setAdPass(randomPass());
        setIdFlip(false);
      }, 260);
    }, 3200);
    return () => window.clearInterval(t);
  }, []);

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(adId.replace(/\s/g, ''));
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const steps = {
    anydesk: [
      { icon: 'mdi:tray-arrow-down', title: 'Descargar', desc: 'Haz clic en el botón y descarga AnyDesk desde la web oficial.' },
      { icon: 'mdi:folder-open-outline', title: 'Abrir el archivo', desc: 'Abre el programa descargado. No necesitas instalar nada.' },
      { icon: 'mdi:id-card', title: 'Enviar tu ID', desc: 'Envíanos el número que aparece y comenzamos el soporte.' },
    ],
    teamviewer: [
      { icon: 'mdi:tray-arrow-down', title: 'Descargar TeamViewer', desc: 'Descarga TeamViewer QuickSupport desde el sitio oficial.' },
      { icon: 'mdi:folder-open-outline', title: 'Abrir el programa', desc: 'Ejecuta el archivo descargado (no requiere instalación).' },
      { icon: 'mdi:id-card', title: 'Compartir ID y contraseña', desc: 'Envíanos los datos que aparecen para iniciar el soporte.' },
    ],
  }[activeTab];

  const downloadUrl =
    activeTab === 'anydesk'
      ? 'https://anydesk.com/es/downloads/thank-you?dv=win_exe'
      : 'https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe';

  return (
    <section className="section anydesk-section" id="anydesk">
      <div className="container anydesk-grid">

        {/* ============ LEFT: tabs + interactive timeline ============ */}
        <div className="anydesk-text">
          <span className="badge reveal reveal-up">
            <Icon icon="mdi:shield-lock-outline" />
            CONEXIÓN REMOTA SEGURA
          </span>
          <h2 className="reveal reveal-up stagger-1">Descarga el programa para soporte remoto</h2>

          <p className="anydesk-desc reveal reveal-up stagger-2">
            Para comenzar el soporte remoto solo necesitas descargar uno de estos
            programas. No requieren instalación y tardan menos de 1 minuto.
          </p>

          <div className="tab-bar reveal reveal-up stagger-3">
            <span
              className={`tab-glider${activeTab === 'teamviewer' ? ' right' : ''}`}
              aria-hidden="true"
            />
            <button
              className={`tab${activeTab === 'anydesk' ? ' active' : ''}`}
              onClick={() => setActiveTab('anydesk')}
              type="button"
            >
              <Icon icon="simple-icons:anydesk" /> AnyDesk
            </button>
            <button
              className={`tab${activeTab === 'teamviewer' ? ' active' : ''}`}
              onClick={() => setActiveTab('teamviewer')}
              type="button"
            >
              <Icon icon="simple-icons:teamviewer" /> TeamViewer
            </button>
          </div>

          <div className="steps-panel reveal reveal-up stagger-4" key={activeTab}>
            <ol className="steps-list">
              {steps.map((s, i) => (
                <li className="step" key={s.title}>
                  <div className="step-marker">
                    <span className="step-num">{i + 1}</span>
                    <span className="step-icon"><Icon icon={s.icon} /></span>
                    {i < steps.length - 1 && <span className="step-line" aria-hidden="true" />}
                  </div>
                  <div className="step-body">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="btn-primary ad-download-btn">
              <Icon icon="mdi:download" />
              Descargar {activeTab === 'anydesk' ? 'AnyDesk' : 'TeamViewer'}
              <span className="btn-pulse-ring" aria-hidden="true" />
            </a>
          </div>

          <a
            className="help-card reveal reveal-up stagger-5"
            href="https://drive.google.com/file/d/17cp_besLdN9NnNC1BpB9ox5oZVscdHLS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="help-play">
              <Icon icon="mdi:play" />
              <span className="help-play-ring" aria-hidden="true" />
            </span>
            <span className="help-text">
              <strong>¿Tienes problemas descargando el programa?</strong>
              <em>Ver video tutorial paso a paso</em>
            </span>
            <Icon icon="mdi:chevron-right" className="help-arrow" />
          </a>
        </div>

        {/* ============ RIGHT: AnyDesk live simulator ============ */}
        <div className="anydesk-visual reveal reveal-up stagger-3">
          <div className="sim-window glow-card spotlight-card">
            <div className="sim-titlebar">
              <span className="sim-dots" aria-hidden="true">
                <i className="dot-red" /><i className="dot-yellow" /><i className="dot-green" />
              </span>
              <span className="sim-title">{activeTab === 'anydesk' ? 'AnyDesk' : 'TeamViewer QuickSupport'}</span>
              <span className="sim-online">
                <span className="sim-online-dot" /> En línea
              </span>
            </div>

            <div className="sim-body">
              <p className="sim-label">Este es tu ID de conexión</p>
              <button
                type="button"
                className={`sim-id${idFlip ? ' flip' : ''}`}
                onClick={copyId}
                title="Haz clic para copiar (demo)"
              >
                {activeTab === 'anydesk'
                  ? adId.split(' ').map((chunk, i) => (
                      <span key={i} className={i > 0 ? 'sim-id-sep-wrap' : ''}>
                        {i > 0 && <span className="sim-id-sep">@</span>}
                        {chunk}
                      </span>
                    ))
                  : adId.replace(/ /g, '')}
                {activeTab === 'anydesk' && <span className="sim-id-pass">· {adPass}</span>}
              </button>

              <button type="button" className={`sim-copy${copied ? ' done' : ''}`} onClick={copyId}>
                <Icon icon={copied ? 'mdi:check' : 'mdi:content-copy'} />
                {copied ? '¡ID copiado!' : 'Copiar mi ID'}
              </button>

              <div className="sim-status">
                <Icon icon="mdi:account-clock" />
                <span>Esperando conexión del técnico…</span>
                <span className="sim-waiting" aria-hidden="true"><i /><i /><i /></span>
              </div>
            </div>

            <div className="sim-footer">
              <span><Icon icon="mdi:check-circle" /> Sin instalación</span>
              <span><Icon icon="mdi:lock-check" /> Cifrado extremo a extremo</span>
              <span><Icon icon="mdi:eye-outline" /> Tú ves todo en vivo</span>
            </div>
          </div>

          <div className="sim-hint">
            <Icon icon="mdi:gesture-tap" />
            Así se ve la pantalla que enviarás al técnico — haz clic en el ID para probar
          </div>
        </div>

      </div>
    </section>
  );
}
