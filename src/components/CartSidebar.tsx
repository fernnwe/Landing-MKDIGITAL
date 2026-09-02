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

const PAYMENT_OPTIONS = [
  { id: 'banpro', name: 'BANPRO', icon: 'mdi:bank', type: 'bank' },
  { id: 'bac', name: 'BAC', icon: 'mdi:bank', type: 'bank' },
  { id: 'lafise', name: 'LAFISE', icon: 'mdi:bank', type: 'bank' },
  { id: 'paypal', name: 'PayPal', icon: 'simple-icons:paypal', type: 'international', link: 'https://www.paypal.me/FernandoAguirreC' },
  { id: 'binance', name: 'Binance Pay', icon: 'simple-icons:binance', type: 'international' },
];

const DISCOUNT_CODES: Record<string, number> = {
  MK2026: 0.03,
  DES15: 0.15,
  PROM2026: 0.05,
  TI1604: 0.1,
};

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart, subtotal, totalItems } = useCart();
  const [step, setStep] = useState<'cart' | 'client-data'>('cart');
  const [clientName, setClientName] = useState('');
  const [location, setLocation] = useState<'nicaragua' | 'extranjero' | ''>('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [discount10, setDiscount10] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [appliedCode, setAppliedCode] = useState('');
  const [codeError, setCodeError] = useState(false);
  const [codeUsed, setCodeUsed] = useState('');

  const eligibleForDiscount = totalItems > 4;
  const discount = discount10 && eligibleForDiscount ? subtotal * 0.1 : 0;
  const codeRate = appliedCode ? DISCOUNT_CODES[appliedCode] : 0;
  const codeDiscount = codeRate ? subtotal * codeRate : 0;
  const total = subtotal - discount - codeDiscount;

  const applyDiscountCode = () => {
    const code = discountCode.trim().toUpperCase();
    if (!code) return;
    if (DISCOUNT_CODES[code]) {
      const used = JSON.parse(localStorage.getItem('mk-used-codes') || '[]') as string[];
      if (used.includes(code)) {
        setAppliedCode('');
        setCodeError(false);
        setCodeUsed(code);
        return;
      }
      if (codeUsed === code) setCodeUsed('');
      setAppliedCode(code);
      setCodeError(false);
    } else {
      setAppliedCode('');
      setCodeError(true);
    }
  };

  const availableMethods = location === 'extranjero'
    ? PAYMENT_OPTIONS.filter((m) => m.type !== 'bank')
    : PAYMENT_OPTIONS;

  const handleLocationChange = (loc: 'nicaragua' | 'extranjero') => {
    setLocation(loc);
    if (loc === 'extranjero') {
      const current = PAYMENT_OPTIONS.find((m) => m.id === paymentMethod);
      if (!current || current.type === 'bank') setPaymentMethod('paypal');
    }
  };

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    let msg = 'Hola, quiero realizar mi pedido:\n\n';
    items.forEach((item, i) => {
      const precioNum = parseFloat(item.producto.precio.replace(/[^0-9,]/g, '').replace(/,/g, ''));
      const base = isNaN(precioNum) ? 0 : precioNum;
      const support = item.soporteRemoto ? item.producto.soporteRemoto || 0 : 0;
      const lineTotal = (base + support) * item.quantity;
      msg += `${i + 1}. ${item.producto.nombre} x${item.quantity} - ${formatCordoba(lineTotal)} (${formatUSD(lineTotal)})\n`;
      if (item.apps && item.apps.length > 0) {
        msg += `     Apps: ${item.apps.join(', ')}\n`;
      }
      if (item.soporteRemoto) {
        msg += `     + Soporte remoto adicional (C$${support.toLocaleString()})\n`;
      }
    });
    msg += '\n\n';
    if (discount > 0) {
      msg += `Descuento 10% MultiCompra: -${formatCordoba(discount)} (${formatUSD(discount)})\n`;
    }
    if (codeDiscount > 0) {
      msg += `Código ${appliedCode} (${codeRate * 100}%): -${formatCordoba(codeDiscount)} (${formatUSD(codeDiscount)})\n`;
    }
    msg += `Total: ${formatCordoba(total)} (${formatUSD(total)})`;
    msg += `\n\n--- Datos del cliente ---`;
    msg += `\nNombre: ${clientName}`;
    msg += `\nResidencia: ${location === 'extranjero' ? 'Otro país' : 'Nicaragua'}`;
    msg += `\nMétodo de pago: ${paymentMethod.toUpperCase()}`;
    return encodeURIComponent(msg);
  };

  const handleCheckout = () => {
    if (step === 'cart') {
      if (items.length === 0) return;
      setStep('client-data');
      return;
    }
    if (step === 'client-data') {
      if (!clientName.trim() || !location || !paymentMethod) {
        alert('Por favor completa todos los campos');
        return;
      }
      const msg = buildWhatsAppMessage();
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
      if (appliedCode) {
        const used = JSON.parse(localStorage.getItem('mk-used-codes') || '[]') as string[];
        if (!used.includes(appliedCode)) {
          used.push(appliedCode);
          localStorage.setItem('mk-used-codes', JSON.stringify(used));
        }
      }
      clearCart();
      setClientName('');
      setLocation('');
      setPaymentMethod('');
      setDiscountCode('');
      setAppliedCode('');
      setCodeError(false);
      setCodeUsed('');
      setStep('cart');
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
                      const base = isNaN(precioNum) ? 0 : precioNum;
                      const support = item.soporteRemoto ? item.producto.soporteRemoto || 0 : 0;
                      const lineTotal = (base + support) * item.quantity;
                      return (
                        <li key={item.producto.id} className="cart-item">
                          <div className="cart-item-icon" style={{ background: `rgba(0,0,0,0.05)` }}>
                            <Icon icon={item.producto.iconoId} color={item.producto.iconoColor} style={{ width: 20, height: 20 }} />
                          </div>
                          <div className="cart-item-details">
                            <h4 className="cart-item-name">{item.producto.nombre}</h4>
                            {item.apps && item.apps.length > 0 && (
                              <div className="cart-item-apps">Apps: {item.apps.join(', ')}</div>
                            )}
                            {item.soporteRemoto && (
                              <div className="cart-item-apps support">+ Soporte remoto</div>
                            )}
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
                    <div className="discount-code-box">
                      {appliedCode ? (
                        <div className="code-applied">
                          <Icon icon="mdi:check-circle" style={{ width: 18, height: 18 }} />
                          <span>
                            Código <strong>{appliedCode}</strong> aplicado (−{codeRate * 100}%)
                          </span>
                          <button
                            className="code-remove"
                            onClick={() => {
                              setAppliedCode('');
                              setDiscountCode('');
                            }}
                            aria-label="Quitar código de descuento"
                          >
                            <Icon icon="mdi:close" />
                          </button>
                        </div>
                      ) : codeUsed ? (
                        <div className="code-used-msg">
                          <Icon icon="mdi:alert-circle" style={{ width: 18, height: 18 }} />
                          <span>Este código (<strong>{codeUsed}</strong>) ya fue utilizado</span>
                          <button
                            className="code-remove"
                            onClick={() => {
                              setCodeUsed('');
                              setDiscountCode('');
                            }}
                            aria-label="Entendido"
                          >
                            <Icon icon="mdi:close" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="code-input-row">
                            <Icon icon="mdi:ticket-percent-outline" style={{ width: 18, height: 18 }} />
                            <input
                              type="text"
                              value={discountCode}
                              onChange={(e) => {
                                setDiscountCode(e.target.value.toUpperCase());
                                setCodeError(false);
                                if (codeUsed === e.target.value.toUpperCase()) setCodeUsed('');
                              }}
                              placeholder="Código de descuento"
                              aria-label="Código de descuento"
                              className={codeError ? ' code-error' : ''}
                            />
                            <button className="code-apply" onClick={applyDiscountCode}>
                              Aplicar
                            </button>
                          </div>
                          {codeError && (
                            <p className="code-error-msg">Código inválido. Verifica e intenta de nuevo.</p>
                          )}
                        </>
                      )}
                    </div>
                    <div className="summary-row">
                      <span>Subtotal ({totalItems} productos)</span>
                      <span className="summary-value">
                        {formatCordoba(subtotal)} <span className="usd">({formatUSD(subtotal)})</span>
                      </span>
                    </div>
                    {!eligibleForDiscount && (
                      <div className="discount-hint">
                        <Icon icon="mdi:tag-percent-outline" />
                        <span>
                          Agrega <strong>{5 - totalItems}</strong> producto{5 - totalItems === 1 ? '' : 's'} más para desbloquear el 10% de descuento
                        </span>
                      </div>
                    )}
                    {eligibleForDiscount && (
                      <label className={`discount-option${discount10 ? ' active' : ''}`}>
                        <input
                          type="checkbox"
                          checked={discount10}
                          onChange={(e) => setDiscount10(e.target.checked)}
                        />
                        <span className="discount-custom-check">
                          <Icon icon="mdi:check" />
                        </span>
                        <span className="discount-label">
                          Activar 10% de descuento MultiCompra
                        </span>
                      </label>
                    )}
                    {discount > 0 && (
                      <div className="summary-row discount">
                        <span>Descuento (10%)</span>
                        <span className="summary-value discount-value">
                          −{formatCordoba(discount)} <span className="usd">(−{formatUSD(discount)})</span>
                        </span>
                      </div>
                    )}
                    {codeDiscount > 0 && (
                      <div className="summary-row discount">
                        <span>Descuento código ({codeRate * 100}%)</span>
                        <span className="summary-value discount-value">
                          −{formatCordoba(codeDiscount)} <span className="usd">(−{formatUSD(codeDiscount)})</span>
                        </span>
                      </div>
                    )}
                    <div className="summary-row total">
                      <span>Total</span>
                      <span className="summary-value total-value">
                        {formatCordoba(total)} <span className="usd">({formatUSD(total)})</span>
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
                  <label>¿Desde qué país realizas tu pedido? <span className="required">*</span></label>
                  <div className="bank-options" role="radiogroup" aria-label="Selecciona tu país">
                    <label className={`bank-option${location === 'nicaragua' ? ' selected' : ''}`}>
                      <input
                        type="radio"
                        name="location"
                        value="nicaragua"
                        checked={location === 'nicaragua'}
                        onChange={() => handleLocationChange('nicaragua')}
                        required={!location}
                      />
                      <div className="bank-option-content">
                        <Icon icon="mdi:flag" style={{ width: 24, height: 24 }} />
                        <span>Nicaragua</span>
                      </div>
                      <div className="bank-radio" />
                    </label>
                    <label className={`bank-option${location === 'extranjero' ? ' selected' : ''}`}>
                      <input
                        type="radio"
                        name="location"
                        value="extranjero"
                        checked={location === 'extranjero'}
                        onChange={() => handleLocationChange('extranjero')}
                      />
                      <div className="bank-option-content">
                        <Icon icon="mdi:earth" style={{ width: 24, height: 24 }} />
                        <span>Otro país</span>
                      </div>
                      <div className="bank-radio" />
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Método de pago <span className="required">*</span></label>
                  {location === 'extranjero' && (
                    <p className="pay-method-hint">Para pedidos fuera de Nicaragua los pagos se realizan por PayPal o Binance Pay.</p>
                  )}
                  <div className="bank-options" role="radiogroup" aria-label="Selecciona método de pago">
                    {availableMethods.map((method) => (
                      <label key={method.id} className={`bank-option${paymentMethod === method.id ? ' selected' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={paymentMethod === method.id}
                          onChange={() => setPaymentMethod(method.id)}
                        />
                        <div className="bank-option-content">
                          <Icon icon={method.icon} style={{ width: 24, height: 24 }} />
                          <span>{method.name}</span>
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