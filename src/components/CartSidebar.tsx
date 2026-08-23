import { useState } from 'react';
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

const BANK_OPTIONS = [
  { id: 'banpro', name: 'BANPRO', icon: 'mdi:bank' },
  { id: 'bac', name: 'BAC', icon: 'mdi:bank' },
  { id: 'lafise', name: 'LAFISE', icon: 'mdi:bank' },
];

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart, subtotal, totalItems } = useCart();
  const [step, setStep] = useState<'cart' | 'client-data'>('cart');
  const [clientName, setClientName] = useState('');
  const [bankAccount, setBankAccount] = useState('');

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    let msg = 'Hola, quiero realizar mi pedido:\n\n';
    items.forEach((item, i) => {
      const precioNum = parseFloat(item.producto.precio.replace(/[^0-9,]/g, '').replace(/,/g, ''));
      const lineTotal = isNaN(precioNum) ? 0 : precioNum * item.quantity;
      msg += `${i + 1}. ${item.producto.nombre} x${item.quantity} - ${formatCordoba(lineTotal)} (${formatUSD(lineTotal)})\n`;
    });
    msg += `\nTotal: ${formatCordoba(subtotal)} (${formatUSD(subtotal)})`;
    msg += `\n\n--- Datos del cliente ---`;
    msg += `\nNombre: ${clientName}`;
    msg += `\nBanco para depósito: ${bankAccount.toUpperCase()}`;
    return encodeURIComponent(msg);
  };

  const handleCheckout = () => {
    if (step === 'cart') {
      if (items.length === 0) return;
      setStep('client-data');
      return;
    }
    if (step === 'client-data') {
      if (!clientName.trim() || !bankAccount) {
        alert('Por favor completa todos los campos');
        return;
      }
      const msg = buildWhatsAppMessage();
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
      closeCart();
    }
  };

  const goBack = () => {
    setStep('cart');
  };

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} aria-hidden="true" />
      <aside className="cart-sidebar" role="dialog" aria-label="Carrito de compras" aria-modal="true">
        <div className="cart-header">
          <h2>
            <Icon icon="mdi:cart" />
            {step === 'cart' ? `Carrito (${totalItems})` : 'Datos para el pedido'}
          </h2>
          <button className="cart-close" onClick={step === 'cart' ? closeCart : goBack} aria-label={step === 'cart' ? 'Cerrar carrito' : 'Volver al carrito'}>
            <Icon icon={step === 'cart' ? 'mdi:close' : 'mdi:arrow-left'} />
          </button>
        </div>

        <div className="cart-body">
          {step === 'cart' ? (
            <>
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
                      Continuar al pago
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
            </>
          ) : (
            <div className="client-data-form">
              <div className="form-header">
                <Icon icon="mdi:account-card-details" style={{ width: 48, height: 48, color: 'var(--cyan)' }} />
                <h3>Completa tus datos para el pedido</h3>
                <p>Esta información se enviará junto con tu pedido por WhatsApp</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleCheckout(); }}>
                <div className="form-group">
                  <label htmlFor="clientName">Tu nombre completo <span className="required">*</span></label>
                  <input
                    type="text"
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ej: Juan Pérez"
                    required
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <label>Tipo de cuenta para depósito <span className="required">*</span></label>
                  <div className="bank-options" role="radiogroup" aria-label="Selecciona tu banco">
                    {BANK_OPTIONS.map((bank) => (
                      <label key={bank.id} className={`bank-option${bankAccount === bank.id ? ' selected' : ''}`}>
                        <input
                          type="radio"
                          name="bankAccount"
                          value={bank.id}
                          checked={bankAccount === bank.id}
                          onChange={() => setBankAccount(bank.id)}
                        />
                        <div className="bank-option-content">
                          <Icon icon={bank.icon} style={{ width: 24, height: 24 }} />
                          <span>{bank.name}</span>
                        </div>
                        <div className="bank-radio" />
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn-back" onClick={goBack}>
                    <Icon icon="mdi:arrow-left" />
                    Volver
                  </button>
                  <button type="submit" className="btn-checkout">
                    <Icon icon="simple-icons:whatsapp" />
                    Enviar pedido por WhatsApp
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}