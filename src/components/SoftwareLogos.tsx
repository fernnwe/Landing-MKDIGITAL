import { Icon } from '@iconify/react';
import './SoftwareLogos.css';

interface SoftwareItem {
  id: string;
  nombre: string;
  icono: string;
  descripcion: string;
  color: string;
}

const software: SoftwareItem[] = [
  { id: 'windows', nombre: 'Windows', icono: 'mdi:microsoft-windows', color: '#00A4EF', descripcion: 'Sistema operativo para PCs de escritorio y portátiles' },
  { id: 'office', nombre: 'Microsoft Office', icono: 'mdi:microsoft-office', color: '#D83B01', descripcion: 'Suite ofimática con Word, Excel, PowerPoint y Outlook' },
  { id: 'adobe', nombre: 'Adobe', icono: 'simple-icons:adobe', color: '#FF0000', descripcion: 'Suite creativa: Photoshop, Illustrator, Premiere y más' },
  { id: 'corel', nombre: 'CorelDRAW', icono: 'simple-icons:coreldraw', color: '#00B388', descripcion: 'Diseño vectorial para ilustración y diagramación' },
  { id: 'autocad', nombre: 'AutoCAD', icono: 'simple-icons:autodesk', color: '#E51050', descripcion: 'Diseño y dibujo asistido por computadora en 2D y 3D' },
  { id: 'sketchup', nombre: 'SketchUp', icono: 'simple-icons:sketchup', color: '#FF6F00', descripcion: 'Modelado 3D para arquitectura, diseño e ingeniería' },
  { id: 'revit', nombre: 'Revit', icono: 'simple-icons:autodesk', color: '#009999', descripcion: 'Modelado BIM para diseño arquitectónico y construcción' },
  { id: 'avg', nombre: 'AVG Antivirus', icono: 'mdi:shield-plus', color: '#00C853', descripcion: 'Protección contra virus, malware y amenazas en línea' },
  { id: 'eset', nombre: 'ESET NOD32', icono: 'mdi:shield-star', color: '#00ADEF', descripcion: 'Antivirus ligero con protección proactiva avanzada' },
  { id: 'avast', nombre: 'Avast', icono: 'simple-icons:avast', color: '#FF7800', descripcion: 'Solución de seguridad con antivirus y firewall' },
  { id: 'kaspersky', nombre: 'Kaspersky', icono: 'mdi:shield-lock', color: '#00A88E', descripcion: 'Protección integral contra ciberamenazas y ransomware' },
  { id: 'solidworks', nombre: 'SolidWorks', icono: 'simple-icons:dassaultsystemes', color: '#FF0000', descripcion: 'Diseño mecánico 3D para ingeniería y manufactura' },
  { id: 'visio', nombre: 'Microsoft Visio', icono: 'simple-icons:microsoft', color: '#5E5E5E', descripcion: 'Diagramación profesional: diagramas de flujo y organigramas' },
  { id: 'project', nombre: 'Microsoft Project', icono: 'simple-icons:microsoft', color: '#217346', descripcion: 'Gestión de proyectos, planificación y seguimiento' },
  { id: 'drivers', nombre: 'Drivers', icono: 'mdi:cpu-64-bit', color: '#818CF8', descripcion: 'Controladores y actualizaciones para máximo rendimiento' },
];

export default function SoftwareLogos() {
  return (
    <section className="section" id="software" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge reveal reveal-up">
            <Icon icon="mdi:cube" />
            SOFTWARE DISPONIBLE
          </span>
          <h2 className="reveal reveal-up stagger-1">Software que instalamos diariamente</h2>
          <p className="reveal reveal-up stagger-2">
            Trabajamos con los programas más utilizados por estudiantes, empresas y profesionales.
          </p>
        </div>

        <div className="logos-grid">
          {software.map((s, i) => (
            <div key={s.id} className={`card glow-card flip-card reveal reveal-up stagger-${Math.min(i + 1, 10)}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span className="icon-wrap" style={{ color: s.color }}>
                    <Icon icon={s.icono} color={s.color} />
                  </span>
                  <span className="name">{s.nombre}</span>
                </div>
                <div className="flip-card-back">
                  <div className="back-content">
                    <span className="icon-wrap sm" style={{ color: s.color }}>
                      <Icon icon={s.icono} color={s.color} />
                    </span>
                    <p>{s.descripcion}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
