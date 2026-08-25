import { useState } from 'react';
import type { ReactNode } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import './ActivaLicenciaPage.css';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
);

type LicenseItem = {
  product?: string;
  productColor?: string;
  key: string;
};

type Step = {
  title: string;
  body: ReactNode;
};

type Product = {
  id: string;
  iconBg: string;
  iconColor: string;
  icon: ReactNode;
  name: string;
  subtitle: string;
  badges: { icon: ReactNode; label: string }[];
  btnText: string;
  btnRevealedText: string;
  licenseLabel: string;
  licenseItems: LicenseItem[];
  copyLabel: string;
  stepsTitle: string;
  steps: Step[];
};

const mcafee: Product = {
  id: 'mcafee-section',
  iconBg: 'rgba(207,10,44,0.1)',
  iconColor: '#CF0A2C',
  icon: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#CF0A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v6c0 5.25 3.83 10.15 9 11 5.17-.85 9-5.75 9-11V7l-9-5z"/>
      <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2"/>
    </svg>
  ),
  name: 'McAfee AntiVirus',
  subtitle: 'Licencia original para Windows — 1 año de validez',
  badges: [
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, label: '1 año' },
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>, label: '1 PC' },
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: 'Tiempo real' },
  ],
  btnText: 'Canjear licencia',
  btnRevealedText: 'Listo',
  licenseLabel: 'Códigos de activación McAfee',
  licenseItems: [
    { product: '3 dispositivos', productColor: '#CF0A2C', key: 'S447V-HPAD2-926H9-49FLD-APMP4' },
    { key: 'AKF5Z-2R346-2N2EP-55EWX-APHAP' },
  ],
  copyLabel: 'Copiar código',
  stepsTitle: 'Pasos para activar McAfee',
  steps: [
    { title: 'Ingresa al sitio de activación', body: <>Abre <a href="https://www.mcafee.com/es-es/consumer-support/activate-product-key.html" target="_blank" rel="noopener">mcafee.com/activate</a> en tu navegador.</> },
    { title: 'Ingresa tu código', body: <>Copia cualquiera de los códigos de arriba en el campo correspondiente.</> },
    { title: 'Deja el país que aparezca', body: <>No cambies el país predeterminado. Continúa al siguiente paso.</> },
    { title: 'Ingresa tu email y descarga', body: <>Pon tu correo electrónico, crea tu cuenta y descarga el antivirus automáticamente.</> },
  ],
};

const avast: Product = {
  id: 'avast-section',
  iconBg: 'rgba(255,107,0,0.1)',
  iconColor: '#FF6B00',
  icon: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <circle cx="12" cy="12" r="3" stroke="#FF6B00" fill="none"/>
    </svg>
  ),
  name: 'Avast Premium',
  subtitle: 'Licencia original — 1 año de validez',
  badges: [
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, label: '1 año' },
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>, label: '1 PC' },
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: 'Anti-malware' },
  ],
  btnText: 'Canjear licencia',
  btnRevealedText: 'Listo',
  licenseLabel: 'Código de activación Avast',
  licenseItems: [
    { key: 'ES8769-KXH4E2-45LDY6' },
  ],
  copyLabel: 'Copiar código',
  stepsTitle: 'Pasos para activar Avast',
  steps: [
    { title: 'Descarga Avast', body: <>Descarga Avast Free desde <a href="https://www.avast.com/es-es/download-thank-you.php?product=ANTIVIRUS&locale=es-es" target="_blank" rel="noopener">avast.com</a> e instálalo en tu PC.</> },
    { title: 'Ve a Menú &gt; Mis licencias', body: <>Abre Avast, haz clic en <strong>Menú</strong> (esquina superior derecha) y selecciona <strong>Mis licencias</strong>.</> },
    { title: 'Introducir código de activación', body: <>Haz clic en <strong>Introducir código de activación</strong> e ingresa el código de arriba.</> },
    { title: 'Listo', body: <>Tu Avast se actualizará automáticamente a la versión Premium. ¡Disfruta de protección completa!</> },
  ],
};

const autodesk: Product = {
  id: 'autodesk-section',
  iconBg: 'rgba(0,169,224,0.1)',
  iconColor: '#00A9E0',
  icon: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#00A9E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M8 8l3 8 3-8"/>
      <path d="M6 16h12"/>
    </svg>
  ),
  name: 'Autodesk 2026',
  subtitle: 'Claves de producto para todas las versiones Autodesk 2026',
  badges: [
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, label: 'Versión 2026' },
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>, label: 'Claves originales' },
  ],
  btnText: 'Ver claves',
  btnRevealedText: 'Listo',
  licenseLabel: 'Claves de producto Autodesk 2026',
  licenseItems: [
    { product: 'AutoCAD 2026', key: '575-58775363:001R1' },
    { product: 'Revit 2026', key: '575-48881264:829R1' },
    { product: 'Maya 2026', key: '575-32137777:657R1' },
    { product: 'AutoCAD LT 2026', key: '575-37043108:128R1' },
    { product: 'Robot Structural Analysis 2026', key: '575-49155438:547R1' },
    { product: 'Inventor Professional 2026', key: '575-49423870:777R1' },
    { product: 'Advance Steel 2026', key: '575-19420582:959R1' },
    { product: 'AutoCAD Architecture 2026', key: '575-53390972:185R1' },
    { product: 'Civil 3D 2026', key: '575-24703322:237R1' },
    { product: '3ds Max 2026', key: '575-47128435:057R1' },
  ],
  copyLabel: 'Copiar clave',
  stepsTitle: 'Cómo usar estas claves',
  steps: [
    { title: 'Descarga e instala el software', body: <>Descarga el producto Autodesk 2026 desde <a href="https://www.autodesk.com/" target="_blank" rel="noopener">autodesk.com</a> e instálalo.</> },
    { title: 'Usa la clave de producto correcta', body: <>Durante la instalación, cuando te pida un código de producto, ingresa la clave correspondiente (ej. <strong>575-58775363:001R1</strong> para AutoCAD).</> },
    { title: 'Completa la instalación', body: <>La clave de producto está compuesta por el código <strong>575-XXXXXXX</strong> más el sufijo <strong>:XXXRX</strong>. Ingresa ambos exactamente como aparecen.</> },
    { title: 'Importante', body: <>Estas claves son compatibles únicamente con las versiones <strong>Autodesk 2026</strong>. Guarda este mensaje para futuras referencias o reinstalaciones.</> },
  ],
};

const products = [mcafee, avast, autodesk];

export default function ActivaLicenciaPage() {
  usePageMeta(
    'Canjear licencias - MKDIGITAL Nicaragua',
    'Canjea tu licencia McAfee AntiVirus o Avast Premium aquí. Promoción exclusiva por tiempo limitado en Nicaragua.',
  );

  const [authed, setAuthed] = useState(() => sessionStorage.getItem('activa-licencia-auth') === '1');
  const [password, setPassword] = useState('');
  const [passError, setPassError] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const checkPass = () => {
    if (password === 'mkdigital2026$') {
      sessionStorage.setItem('activa-licencia-auth', '1');
      setAuthed(true);
    } else {
      setPassError(true);
    }
  };

  const reveal = (id: string) => {
    if (revealed[id]) return;
    setRevealed((r) => ({ ...r, [id]: true }));
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const copyKey = (key: string, label: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    window.setTimeout(() => {
      setCopiedKey((c) => (c === key ? null : c));
    }, 2000);
    void label;
  };

  return (
    <main className="license-page" id="mainContent">
      {!authed && (
        <div id="passwordOverlay" className="password-overlay">
          <div className="password-modal">
            <div className="password-lock">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#CF0A2C" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            </div>
            <h2>Acceso restringido</h2>
            <p>Ingresa la contraseña para acceder a esta página.</p>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setPassError(false); }}
              onKeyDown={(e) => { if (e.key === 'Enter') checkPass(); }}
            />
            <button onClick={checkPass}>Ingresar</button>
            {passError && <p id="passError" className="pass-error">Contraseña incorrecta</p>}
          </div>
        </div>
      )}

      <section className="page-hero reveal reveal-up">
        <div className="hero-container">
          <h1>Canjea tu licencia</h1>
          <p className="hero-subtitle">Selecciona el producto y canjea tu licencia original.</p>
        </div>
      </section>

      {products.map((p) => (
        <section className="product-section reveal reveal-up" id={p.id} key={p.id}>
          <div className="product-inner">
            <div className="product-header">
              <div className="product-icon" style={{ background: p.iconBg }}>
                {p.icon}
              </div>
              <h2>{p.name}</h2>
              <p className="product-subtitle">{p.subtitle}</p>
              <div className="hero-badges">
                {p.badges.map((b, i) => (
                  <div className="badge" key={i}>
                    {b.icon}
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>
              <button className="btn-reveal" onClick={() => reveal(p.id)} disabled={!!revealed[p.id]}>
                {revealed[p.id] ? p.btnRevealedText : p.btnText}
                {revealed[p.id] ? <CheckIcon /> : <ArrowIcon />}
              </button>
            </div>

            {revealed[p.id] && (
              <div className="license-reveal">
                <div className="license-key-card">
                  <div className="license-label">{p.licenseLabel}</div>
                  <div className="license-list">
                    {p.licenseItems.map((item) => (
                      <div className="license-item" key={item.key}>
                        {item.product && (
                          <div className="license-product" style={item.productColor ? { color: item.productColor } : undefined}>
                            {item.product}
                          </div>
                        )}
                        <div className="license-key">{item.key}</div>
                        <button className="btn-copy" onClick={() => copyKey(item.key, p.copyLabel)}>
                          {copiedKey === item.key ? 'Copiado' : p.copyLabel}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="activate-steps">
                  <h3>{p.stepsTitle}</h3>
                  <div className="step-list">
                    {p.steps.map((s, i) => (
                      <div className="activate-step" key={s.title}>
                        <span className="step-num">{i + 1}</span>
                        <div>
                          <h4>{s.title}</h4>
                          <p>{s.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="support-band reveal reveal-up">
        <div className="support-container">
          <p>¿Problemas con la activación? Escríbenos.</p>
          <a href="https://wa.me/50581088124?text=Hola%2C+recib%C3%AD+mi+c%C3%B3digo+y+necesito+ayuda+con+la+activaci%C3%B3n" target="_blank" rel="noopener" className="btn-wa">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
