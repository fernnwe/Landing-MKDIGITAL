import { useState } from 'react';
import { Icon } from '@iconify/react';
import './DownloadAnyDesk.css';

const WA_SEND_ID =
  'https://wa.me/50581088124?text=Hola%2C%20ya%20descargu%C3%A9%20el%20programa%2C%20mi%20ID%20es%3A%20';

export default function DownloadAnyDesk() {
  const [activeTab, setActiveTab] = useState<'anydesk' | 'teamviewer'>('anydesk');

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
              <p className="sim-label">Dentro del programa verás algo así</p>

              <div className="sim-id-zone">
                <span className="sim-id-scanline" aria-hidden="true" />
                <span className="sim-id-badge-demo">
                  <Icon icon="mdi:eye-outline" />
                  Ejemplo ilustrativo
                </span>
                <span className="sim-id-app-label">
                  {activeTab === 'anydesk' ? 'Este puesto de trabajo' : 'Su ID'}
                </span>
                <span className="sim-id-example" aria-hidden="true">
                  {activeTab === 'anydesk' ? 'XXX · XXX · XXX' : 'XXXX XXXXXX'}
                </span>
                <span className="sim-id-note">
                  Tu {activeTab === 'anydesk' ? 'ID' : 'ID y contraseña'} aparecerán aquí al abrir el programa
                </span>
              </div>

              <a href={WA_SEND_ID} target="_blank" rel="noopener noreferrer" className="sim-wa-btn">
                <Icon icon="simple-icons:whatsapp" />
                Ya lo descargué — enviar mi ID
              </a>

              <div className="sim-status">
                <Icon icon="mdi:account-clock" />
                <span>Un técnico te responderá de inmediato</span>
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
            <Icon icon="mdi:information-outline" />
            Ejemplo ilustrativo de la pantalla del programa — tu ID real solo aparece en tu computadora
          </div>
        </div>

      </div>
    </section>
  );
}
