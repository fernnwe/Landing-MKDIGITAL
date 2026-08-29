import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import type { Producto } from '../data/productos';
import { APPS_ADOBE, categorias } from '../data/productos';
import { useCart } from '../context/CartContext';
import './ProductDetailModal.css';

const WA_NUMBER = '50581088124';
const TASA = 37;

function parsePrecio(precio: string): number | null {
  const soloNum = precio.replace(/[^0-9,]/g, '').replace(/,/g, '');
  const n = parseInt(soloNum, 10);
  return isNaN(n) ? null : n;
}

function precioUSD(precio: string): string | null {
  const n = parsePrecio(precio);
  if (n === null) return null;
  return '$' + (n / TASA).toFixed(2);
}

interface Props {
  producto: Producto;
  onClose: () => void;
}

export default function ProductDetailModal({ producto: p, onClose }: Props) {
  const { addItem } = useCart();
  const cat = categorias.find((c) => c.id === p.categoria);
  const [selectedApps, setSelectedApps] = useState<string[]>(p.apps ? [...p.apps] : []);

  const appsList = p.categoria === 'adobe' ? APPS_ADOBE : p.apps || [];
  const maxSelect = p.appsSelect;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const toggleApp = (app: string) => {
    if (maxSelect === undefined) return;
    setSelectedApps((prev) => {
      if (prev.includes(app)) return prev.filter((a) => a !== app);
      if (prev.length >= maxSelect) return prev;
      return [...prev, app];
    });
  };

  const canAdd = maxSelect === undefined || selectedApps.length > 0;
  const remaining = maxSelect !== undefined ? maxSelect - selectedApps.length : 0;

  const handleAdd = () => {
    addItem(p, selectedApps.length > 0 ? selectedApps : undefined);
    onClose();
  };

  const waMessage = encodeURIComponent(
    `Hola, quiero información sobre ${p.nombre}${selectedApps.length > 0 ? ` (${selectedApps.join(', ')})` : ''}`,
  );

  return (
    <div className="pdm-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.nombre}>
      <div className="pdm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pdm-close" onClick={onClose} aria-label="Cerrar">
          <Icon icon="mdi:close" />
        </button>

        <div className="pdm-header">
          <div className="pdm-icon" style={cat ? { background: cat.bgGradient } : undefined}>
            <Icon icon={p.iconoId} color="#FFFFFF" style={{ width: 56, height: 56 }} />
          </div>
          <div className="pdm-title-wrap">
            {cat && <span className="pdm-cat">{cat.nombre}</span>}
            <h2 className="pdm-title">{p.nombre}</h2>
            {p.off && <span className="pdm-off">-{p.off}</span>}
          </div>
        </div>

        <div className="pdm-body">
          <p className="pdm-detail">{p.detalle || p.descripcion}</p>

          {maxSelect !== undefined && appsList.length > 0 && (
            <div className="pdm-apps">
              <div className="pdm-apps-header">
                <h3>Elige qué programas incluir</h3>
                <span className="pdm-apps-count">
                  {selectedApps.length}/{maxSelect} seleccionados
                </span>
              </div>
              <p className="pdm-apps-hint">
                {remaining > 0
                  ? `Selecciona ${remaining} más de las ${appsList.length} apps disponibles.`
                  : 'Selección completa. Puedes cambiar de opinión.'}
              </p>
              <div className="pdm-apps-grid">
                {appsList.map((app) => {
                  const selected = selectedApps.includes(app);
                  const reachLimit = !selected && maxSelect !== undefined && selectedApps.length >= maxSelect;
                  return (
                    <button
                      key={app}
                      type="button"
                      className={`pdm-app${selected ? ' selected' : ''}${reachLimit ? ' disabled' : ''}`}
                      onClick={() => toggleApp(app)}
                      disabled={reachLimit}
                      aria-pressed={selected}
                    >
                      <span className="pdm-app-check">
                        {selected ? <Icon icon="mdi:check" /> : <Icon icon="mdi:plus" />}
                      </span>
                      <span className="pdm-app-name">{app}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {p.apps && maxSelect === undefined && (
            <div className="pdm-apps pdm-includes">
              <h3>Incluye:</h3>
              <ul className="pdm-includes-list">
                {p.apps.map((app) => (
                  <li key={app}>
                    <Icon icon="mdi:check-circle" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="pdm-footer">
          <div className="pdm-pricing">
            {p.old && <span className="pdm-old">{p.old}</span>}
            <div className="pdm-price-row">
              <span className="pdm-price">{p.precio}</span>
              {precioUSD(p.precio) && <span className="pdm-usd">{precioUSD(p.precio)}</span>}
            </div>
          </div>
          <div className="pdm-actions">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pdm-btn pdm-btn-wa"
            >
              <Icon icon="simple-icons:whatsapp" />
              WhatsApp
            </a>
            <button className="pdm-btn pdm-btn-cart" onClick={handleAdd} disabled={!canAdd}>
              <Icon icon="mdi:cart-plus" />
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
