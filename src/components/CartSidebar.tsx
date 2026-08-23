import { Icon } from '@iconify/react';
import { useCart } from '../context/CartContext';
import './CartSidebar.css';

const WA_NUMBER = '50581088124';
const TASA = 37;

function formatCordoba(n: number): string {
  return 'C$' + n.toLocaleString();
}

function formatUSD(n: number): string {
  return '$' + (n / TASA).toFixed(2);
}

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    let msg = 'Hola, quiero realizar mi pedido:\n\n';
    items.forEach((item, i) => {
      const precioNum = parseFloat(item.producto.precio.replace(/[^0-9,]/g, '').replace(/,/g, ''));
      const lineTotal = isNaN(precioNum) ? 0 : precioNum * item.quantity;
      msg += `${i + 1}. ${item.producto.nombre} x${item.quantity} - ${formatCordoba(lineTotal)} (${formatUSD(lineTotal)})\n`;
    });
    msg += `\nTotal: ${formatCordoba(subtotal)} (${formatUSD(subtotal)})`;
    return encodeURIComponent(msg);
  };

  const handleCheckout = () => {
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
    closeCart();
  };

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} aria-hidden="true" />
      <aside className="cart-sidebar" role="dialog" aria-label="Carrito de compras" aria-modal="true">
        <div className="cart-header">
          <h2>
            <Icon icon="mdi:cart" />
            Carrito ({totalItems})
          </h2>
          <button className="cart-close" onClick={closeCart} aria-label="Cerrar carrito">
            <Icon icon="mdi:close" />
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <Icon icon="mdi:cart-outline" style={{ width: 48, height: 48 }} />
              <h3>Tu carrito está vacío</h3>
              <p>Agrega productos desde el catálogo</p>
            </div>
          ) : (
            <>
              <ul className="cart-items">
                {items.map((item) => {
                  const precioNum = parseFloat(item.producto.precio.replace(/[^0-9,]/g, '').replace(/,/g, ''));
                  const lineTotal = isNaN(precioNum) ? 0 : precioNum * item.quantity;
                  return (
                    <li key={item.producto.id} className="cart-item">
                      <div className="cart-item-icon" style={{ background: `rgba(0,0,0,0.05)` }}>
                        <Icon icon={item.producto.iconoId} color={item.producto.iconoColor} style={{ width: 20, height: 20 }} />
                      </div>
                      <div className="cart-item-details">
                        <h4 className="cart-item-name">{item.producto.nombre}</h4>
                        <div className="cart-item-price">
                          <span className="cart-item-unit">{formatCordoba(lineTotal)}</span>
                          <span className="cart-item-usd">({formatUSD(lineTotal)})</span>
                        </div>
                        <div className="cart-item-qty">
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(item.producto.id, item.quantity - 1)}
                            aria-label="Disminuir cantidad"
                            disabled={item.quantity <= 1}
                          >
                            <Icon icon="mdi:minus" />
                          </button>
                          <span className="qty-value">{item.quantity}</span>
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(item.producto.id, item.quantity + 1)}
                            aria-label="Aumentar cantidad"
                          >
                            <Icon icon="mdi:plus" />
                          </button>
                        </div>
                      </div>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeItem(item.producto.id)}
                        aria-label={`Eliminar ${item.producto.nombre}`}
                      >
                        <Icon icon="mdi:trash-can-outline" />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal ({totalItems} productos)</span>
                  <span className="summary-value">
                    {formatCordoba(subtotal)} <span className="usd">({formatUSD(subtotal)})</span>
                  </span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span className="summary-value total-value">
                    {formatCordoba(subtotal)} <span className="usd">({formatUSD(subtotal)})</span>
                  </span>
                </div>
                <button className="btn-checkout" onClick={handleCheckout}>
                  <Icon icon="simple-icons:whatsapp" />
                  Enviar pedido por WhatsApp
                </button>
                {items.length > 0 && (
                  <button className="btn-clear" onClick={clearCart}>
                    <Icon icon="mdi:broom" />
                    Vaciar carrito
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}