import { useEffect, useRef, useState } from 'react';
import './Asistente.css';

interface Msg {
  tipo: 'user' | 'bot';
  text: string;
  time: string;
}

const knowledge = [
  {
    title: 'Servicios principales',
    text: `En MK Digital ofrecemos soluciones completas de software para hogares y empresas en Nicaragua. Nos especializamos en instalación de programas licenciados, soporte técnico remoto, optimización de equipos y sistemas de facturación para negocios. Todo con atención personalizada y resultados garantizados.`,
    keywords: ['servicios', 'que hacen', 'a que se dedican', 'mk digital', 'empresa', 'ofrecen'],
  },
  {
    title: 'Instalación de Windows',
    text: `Realizamos instalación limpia de Windows 10 y Windows 11 Pro, incluyendo activación permanente, drivers actualizados y configuración completa del sistema. Entregamos el equipo optimizado, sin bloatware y listo para trabajar desde el primer momento.`,
    keywords: ['windows', 'formateo', 'formatear', 'pc lenta', 'computadora lenta', 'sistema operativo', 'instalar windows'],
  },
  {
    title: 'Instalación de Office',
    text: `Instalamos Microsoft Office 2021 y 2024 Professional Plus con activación permanente. Incluye Word, Excel, PowerPoint, Outlook y todas las herramientas necesarias para el entorno profesional y académico. Dejamos todo configurado y funcionando.`,
    keywords: ['office', 'word', 'excel', 'powerpoint', 'microsoft', 'ofimatica', 'instalar office'],
  },
  {
    title: 'Sistemas de facturación',
    text: `Ponemos a tu disposición sistemas de facturación modernos con control de inventario, ideal para pequeños y medianos negocios. Destacamos FactuLite (app móvil para emprendedores) y ViperPOS (sistema web profesional multisucursal). Ambos incluyen soporte técnico y actualizaciones.`,
    keywords: ['factura', 'facturacion', 'inventario', 'sistema', 'pos', 'factulite', 'negocio', 'viperpos'],
  },
  {
    title: 'Soporte remoto',
    text: `Brindamos soporte técnico remoto en toda Nicaragua con conexión cifrada y supervisada en tiempo real. Puedes ver cada movimiento que hacemos en tu PC y cerrar la sesión cuando lo desees. La mayoría de problemas se resuelven en menos de 30 minutos.`,
    keywords: ['soporte', 'ayuda', 'remoto', 'reparar', 'problema', 'tecnico', 'asistencia'],
  },
  {
    title: 'Precios',
    text: `Nuestros servicios tienen precios accesibles desde C$400, dependiendo del tipo de instalación o soporte requerido. Aceptamos transferencias bancarias (BANPRO, BAC, LAFISE) y depósitos en efectivo. El pago se realiza al finalizar el servicio.`,
    keywords: ['precio', 'costo', 'cuanto cuesta', 'valor', 'tarifa', 'pagar', 'cuesta'],
  },
  {
    title: 'Tiempo de servicio',
    text: `La mayoría de nuestras instalaciones y soportes se completan en un rango de 20 a 40 minutos. Los tiempos pueden variar según la complejidad del servicio, pero nos caracterizamos por ser rápidos y eficientes en cada atención.`,
    keywords: ['tiempo', 'tardan', 'demora', 'duracion', 'rapido', 'minutos'],
  },
  {
    title: 'Garantía',
    text: `Todas nuestras instalaciones incluyen una semana de garantía con soporte post-servicio incluido. Si presentas cualquier inconveniente durante ese período, te asistimos sin costo adicional. Respaldamos cada trabajo que realizamos.`,
    keywords: ['garantia', 'seguridad', 'respaldo', 'postventa'],
  },
  {
    title: 'Pagos',
    text: `Aceptamos transferencias bancarias a cuentas en BANPRO, BAC y LAFISE, tanto en córdobas como en dólares. También recibimos depósitos en efectivo. El pago se realiza únicamente cuando el trabajo esté terminado y verificado.`,
    keywords: ['pago', 'transferencia', 'efectivo', 'deposito', 'banco', 'bancaria'],
  },
  {
    title: 'Contacto',
    text: `Puedes comunicarte con nosotros directamente por WhatsApp al +505 81088124. Estamos disponibles de 6:00 AM a 9:00 PM, incluyendo fines de semana. Te responderemos en menos de 15 minutos.`,
    keywords: ['contacto', 'telefono', 'numero', 'whatsapp', 'hablar', 'escribir'],
  },
  {
    title: 'Software disponible',
    text: `Trabajamos diariamente con más de 15 categorías de software: Microsoft Windows y Office, Adobe Creative Cloud, AutoCAD, Revit, SolidWorks, CorelDRAW, SketchUp, antivirus (AVG, ESET, Avast, Kaspersky), Microsoft Visio, Project y más. Consulta nuestro catálogo completo para ver precios y promociones.`,
    keywords: ['software', 'programas', 'catalogo', 'lista', 'disponible', 'instalar', 'aplicaciones'],
  },
];

function normalize(text: string) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function similarity(msg: string, item: { keywords: string[]; text: string }) {
  let score = 0;
  item.keywords.forEach((k) => {
    const regex = new RegExp('\\b' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    if (regex.test(msg)) score += 3;
    else if (msg.includes(k)) score += 2;
  });
  const words = msg.split(/\s+/);
  words.forEach((w) => {
    if (w.length > 3 && item.text.toLowerCase().includes(w)) score += 0.3;
  });
  return score;
}

function buscarRespuesta(msg: string) {
  msg = normalize(msg);
  let best: (typeof knowledge)[number] | null = null;
  let bestScore = 0;

  knowledge.forEach((item) => {
    const score = similarity(msg, item);
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  });

  if (bestScore < 1.5) return null;
  return best!.text;
}

function responder(msg: string) {
  const r = buscarRespuesta(msg);
  if (r) return r;

  return `Gracias por tu consulta. Estos son los temas en los que puedo ayudarte:

• Instalación de Windows y Office
• Programas Adobe y Autodesk
• Sistemas de facturación (FactuLite, ViperPOS)
• Antivirus y seguridad
• Optimización de PC
• Precios y formas de pago
• Soporte técnico remoto

¿Sobre cuál de estos temas te gustaría recibir información?`;
}

const suggestionTexts = [
  '¿Qué servicios ofrecen?',
  'Precios de instalación',
  'Windows y Office',
  'Soporte remoto',
  'Formas de pago',
  'Restaurantes',
];

const WELCOME =
  'Hola, soy el asistente virtual de MK Digital. Estoy aquí para ayudarte con información sobre nuestros servicios, precios, soporte técnico y más. ¿En qué puedo asistirte el día de hoy?';

function hora() {
  const d = new Date();
  return d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0');
}

export default function Asistente() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [showSug, setShowSug] = useState(false);
  const [input, setInput] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages([{ tipo: 'bot', text: WELCOME, time: hora() }]);
    const t = setTimeout(() => setShowSug(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  const addMsg = (text: string, tipo: 'user' | 'bot') => {
    setTyping(false);
    setMessages((prev) => [...prev, { tipo, text, time: hora() }]);
  };

  const enviar = (textoOverride?: string) => {
    const texto = (textoOverride ?? input).trim();
    if (!texto) return;
    setShowSug(false);
    addMsg(texto, 'user');
    setInput('');
    setTyping(true);
    setTimeout(() => {
      addMsg(responder(texto), 'bot');
      setShowSug(true);
    }, 800 + Math.random() * 400);
  };

  const clearChat = () => {
    setTyping(false);
    setMessages([{ tipo: 'bot', text: WELCOME, time: hora() }]);
    setShowSug(true);
  };

  return (
    <>
      <div
        id="aiFloat"
        className={`fab${open ? ' active' : ''}`}
        aria-label="Abrir chat"
        onClick={() => {
          const next = !open;
          setOpen(next);
          if (next) {
            setTimeout(() => inputRef.current?.focus(), 300);
          }
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /></svg>
        <span className="fab-ring"></span>
        <span className="fab-badge"></span>
      </div>

      <div id="aiChat" className={`chat-sheet glass${open ? ' open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">M</div>
            <div>
              <strong>Asistente MK</strong>
              <span className="chat-status">
                <span className="status-dot"></span>
                En línea
              </span>
            </div>
          </div>
          <div className="chat-header-actions">
            <button aria-label="Limpiar chat" title="Limpiar" onClick={clearChat}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
            </button>
            <button aria-label="Cerrar chat" onClick={() => setOpen(false)}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
            </button>
          </div>
        </div>

        <div className="chat-body">
          <div className="chat-messages" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.tipo}`}>
                <div
                  className="bubble"
                  dangerouslySetInnerHTML={{
                    __html: `${m.text.replace(/\n/g, '<br>')}<span class="time">${m.time}</span>`,
                  }}
                />
              </div>
            ))}
          </div>
          {typing && (
            <div className="typing-indicator">
              <div className="typing-dots"><span></span><span></span><span></span></div>
            </div>
          )}
        </div>

        {showSug && (
          <div className="chat-suggestions">
            {suggestionTexts.map((s) => (
              <button key={s} className="suggestion-chip" onClick={() => enviar(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="chat-input-bar">
          <div className="input-wrap">
            <input
              ref={inputRef}
              value={input}
              placeholder="Escribe un mensaje..."
              autoComplete="off"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') enviar();
              }}
            />
          </div>
          <button aria-label="Enviar" onClick={() => enviar()}>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z" /></svg>
          </button>
        </div>
      </div>
    </>
  );
}
