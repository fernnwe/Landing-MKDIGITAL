import { Icon } from '@iconify/react';
import type { Producto } from '../data/productos';
import { categorias } from '../data/productos';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

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

function precioUSDSimple(n: number): string {
  return '$' + (n / TASA).toFixed(2);
}

export default function ProductCard({ producto: p, onOpenDetail }: { producto: Producto; onOpenDetail?: () => void }) {
  const { addItem } = useCart();
  const cat = categorias.find((c) => c.id === p.categoria)!;
  const pCordoba = p.precio;
  const pDolar = precioUSD(p.precio);
  const pOldNum = p.old ? parsePrecio(p.old) : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ((p.appsSelect !== undefined || p.apps) && onOpenDetail) {
      onOpenDetail();
      return;
    }
    addItem(p);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="product-card"
      data-categoria={p.categoria}
      data-nombre={p.nombre.toLowerCase()}
      onClick={onOpenDetail}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onOpenDetail) {
          e.preventDefault();
          onOpenDetail();
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      {p.off && <span className="badge-discount">-{p.off}</span>}
      {p.badge === 'own' && (
        <span className="badge-own">
          <Icon icon="mdi:star" />
          MK
        </span>
      )}

      <div className="card-icon" style={{ background: `${cat.color}15` }}>
        <div className="card-icon-bg" style={{ background: cat.bgGradient }}></div>
        <Icon icon={p.iconoId} color={p.iconoColor} />
        <div className="card-icon-ring"></div>
      </div>

      <div className="card-body">
        <h3 className="card-title">{p.nombre}</h3>
        {p.descripcion && <p className="card-desc">{p.descripcion}</p>}

        <div className="card-footer">
          <div className="card-pricing">
            {p.old && (
              <div className="price-old-row">
                <span className="price-old">{p.old}</span>
                {pOldNum !== null && <span className="price-old-usd">{precioUSDSimple(pOldNum)}</span>}
              </div>
            )}
            <div className="price-current-row">
              <span className="price-current">{pCordoba}</span>
              {pDolar && <span className="price-usd">{pDolar}</span>}
            </div>
          </div>

          <div className="card-actions">
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="card-btn card-btn-demo"
                aria-label={`Ver más sobre ${p.nombre}`}
              >
                <Icon icon="mdi:eye-outline" color="#FFFFFF" />
              </a>
            )}
            <button
              onClick={handleAddToCart}
              className="card-btn card-btn-cart"
              aria-label={`Agregar ${p.nombre} al carrito`}
            >
              <Icon icon="mdi:cart-plus" />
            </button>
            <a
              href={`https://wa.me/50581088124?text=${encodeURIComponent(`Hola, quiero información sobre ${p.nombre}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="card-btn card-btn-wa"
            >
              <Icon icon="simple-icons:whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
