import { useState } from 'react';
import { Icon } from '@iconify/react';
import './DownloadAnyDesk.css';

export default function DownloadAnyDesk() {
  const [activeTab, setActiveTab] = useState<'anydesk' | 'teamviewer'>('anydesk');

  return (
    <section className="section anydesk-section" id="anydesk">
      <div className="container anydesk-grid">

        <div className="anydesk-text">
          <span className="badge reveal reveal-up">CONEXIÓN REMOTA SEGURA</span>
          <h2 className="reveal reveal-up stagger-1">Descarga el programa para soporte remoto</h2>

          <p className="anydesk-desc reveal reveal-up stagger-2">
            Para comenzar el soporte remoto solo necesitas descargar uno de estos
            programas. No requieren instalación y tardan menos de 1 minuto.
          </p>

          <div className="tab-bar reveal reveal-up stagger-3">
            <button className={`tab${activeTab === 'anydesk' ? ' active' : ''}`} onClick={() => setActiveTab('anydesk')}>
              <Icon icon="simple-icons:anydesk" /> AnyDesk
            </button>
            <button className={`tab${activeTab === 'teamviewer' ? ' active' : ''}`} onClick={() => setActiveTab('teamviewer')}>
              <Icon icon="simple-icons:teamviewer" /> TeamViewer
            </button>
          </div>

          {activeTab === 'anydesk' && (
            <div className="steps-panel active reveal reveal-up stagger-4">
              <div className="steps-list">
                <div className="step">
                  <div className="step-num">1</div>
                  <div>
                    <h4>Descargar</h4>
                    <p>Haz clic en el botón y descarga AnyDesk desde la web oficial.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">2</div>
                  <div>
                    <h4>Abrir el archivo</h4>
                    <p>Abre el programa descargado. No necesitas instalar nada.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">3</div>
                  <div>
                    <h4>Enviar tu ID</h4>
                    <p>Envíanos el número que aparece y comenzamos el soporte.</p>
                  </div>
                </div>
              </div>
              <a href="https://anydesk.com/es/downloads/thank-you?dv=win_exe" target="_blank" className="btn-primary">
                <Icon icon="mdi:download" /> Descargar AnyDesk
              </a>
            </div>
          )}

          {activeTab === 'teamviewer' && (
            <div className="steps-panel active reveal reveal-up stagger-4">
              <div className="steps-list">
                <div className="step">
                  <div className="step-num">1</div>
                  <div>
                    <h4>Descargar TeamViewer</h4>
                    <p>Descarga TeamViewer QuickSupport desde el sitio oficial.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">2</div>
                  <div>
                    <h4>Abrir el programa</h4>
                    <p>Ejecuta el archivo descargado (no requiere instalación).</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">3</div>
                  <div>
                    <h4>Compartir ID y contraseña</h4>
                    <p>Envíanos los datos que aparecen para iniciar el soporte.</p>
                  </div>
                </div>
              </div>
              <a href="https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe" target="_blank" className="btn-primary">
                <Icon icon="mdi:download" /> Descargar TeamViewer
              </a>
            </div>
          )}

          <div className="help-card reveal reveal-up stagger-5">
            <div className="help-card-inner">
              <Icon icon="mdi:play-circle-outline" />
              <div>
                <p>¿Tienes problemas descargando el programa?</p>
                <a href="https://drive.google.com/file/d/17cp_besLdN9NnNC1BpB9ox5oZVscdHLS/view?usp=sharing" target="_blank">
                  Ver video tutorial paso a paso
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="anydesk-visual reveal reveal-up stagger-3">
          <div className="card glow-card anydesk-card">
            <Icon icon="mdi:shield-lock-outline" className="shield-icon" />
            <h3>Conexión 100% segura</h3>
            <p>Conexión cifrada y control total del proceso en tiempo real.</p>

            <div className="trust-list">
              <span><Icon icon="mdi:check" /> No requiere instalación</span>
              <span><Icon icon="mdi:check" /> Conexión cifrada</span>
              <span><Icon icon="mdi:check" /> Soporte inmediato</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
