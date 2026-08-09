import { useState } from 'react';
import { Icon } from '@iconify/react';
import './CurrencyConverter.css';

const TASA = 37;
const quickValues = [100, 500, 1000, 2000];

export default function CurrencyConverter() {
  const [open, setOpen] = useState(true);
  const [cordoba, setCordoba] = useState('370');
  const [dolar, setDolar] = useState('10');

  const updateFromC = (val: string) => {
    setCordoba(val);
    const n = parseFloat(val) || 0;
    setDolar((n / TASA).toFixed(2));
  };

  const updateFromD = (val: string) => {
    setDolar(val);
    const n = parseFloat(val) || 0;
    setCordoba(String(Math.round(n * TASA)));
  };

  return (
    <div className="card glow-card converter-card reveal reveal-up" id="converter">
      <div className="converter-toggle" onClick={() => setOpen(!open)}>
        <Icon icon="mdi:arrow-left-right" />
        <span>Convertir C$ a $</span>
        <Icon icon="mdi:chevron-down" style={open ? { transform: 'rotate(180deg)' } : undefined} />
      </div>

      <div className={`converter-body${open ? ' open' : ''}`}>
        <p className="converter-rate"><Icon icon="mdi:information" /> 1 USD = C$37</p>

        <div className="converter-row">
          <div className="converter-field">
            <label>Córdobas (C$)</label>
            <div className="converter-input-wrapper">
              <span className="converter-currency">C$</span>
              <input type="number" value={cordoba} min="0" step="1" onChange={(e) => updateFromC(e.target.value)} />
            </div>
          </div>
          <div className="converter-equal"><Icon icon="mdi:equal" /></div>
          <div className="converter-field">
            <label>Dólares ($)</label>
            <div className="converter-input-wrapper">
              <span className="converter-currency">$</span>
              <input type="number" value={dolar} min="0" step="0.01" onChange={(e) => updateFromD(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="converter-quick">
          {quickValues.map((v) => (
            <button key={v} className="quick-btn" onClick={() => updateFromC(String(v))}>
              C${v.toLocaleString()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
