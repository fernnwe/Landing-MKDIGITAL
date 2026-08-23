import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/soluciones', label: 'Soluciones' },
  { to: '/#servicios', label: 'Servicios' },
  { to: '/#software', label: 'Software' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/anydesk', label: 'AnyDesk' },
  { to: '/comentarios', label: 'Comentarios' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (currentScroll / max) * 100) : 0);
      if (menuOpen) {
        setHidden(false);
      } else {
        setHidden(currentScroll > lastScroll.current && currentScroll > 80);
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (to: string) => !to.includes('#') && pathname === to;
  const navClass = `navbar${scrolled ? ' scrolled' : ''}${hidden ? ' hidden' : ''}`;

  const { openCart, totalItems } = useCart();
  const showCart = pathname === '/catalogo';

  const renderLink = (to: string, label: string, overlay: boolean) => {
    if (to.startsWith('http')) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={overlay ? 'btn-primary overlay-cta' : 'btn-primary nav-cta'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {label}
        </a>
      );
    }
    return (
      <Link
        to={to}
        className={`nav-link${overlay ? ' overlay-link' : ''}${isActive(to) ? ' active' : ''}`}
        onClick={() => overlay && setMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      <header className={navClass} id="navbar">
        <div className="navbar-progress" style={{ width: `${progress}%` }}></div>
        <nav className="navbar-inner container">
          <Link to="/" className="navbar-logo" aria-label="MK Digital">
            <span className="logo-text">
              MK<span className="logo-accent">DIGITAL</span>
            </span>
          </Link>

          <button
            className="menu-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>

          <div className="nav-links">
            {links.map((l) => renderLink(l.to, l.label, false))}
            {showCart && (
              <button
                className="cart-btn"
                onClick={openCart}
                aria-label={`Carrito de compras (${totalItems} productos)`}
              >
                <Icon icon="mdi:cart" style={{ width: 20, height: 20 }} />
                {totalItems > 0 && (
                  <span className="cart-badge">{totalItems > 99 ? '99+' : totalItems}</span>
                )}
              </button>
            )}
            <a href="https://wa.me/50581088124" target="_blank" rel="noopener noreferrer" className="btn-primary nav-cta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Escríbenos
            </a>
          </div>
        </nav>
      </header>

      <div className={`nav-overlay${menuOpen ? ' open' : ''}`} id="navOverlay">
        <div className="nav-overlay-links">
          {links.map((l) => renderLink(l.to, l.label, true))}
          {showCart && (
            <button
              className="cart-btn overlay-cart-btn"
              onClick={openCart}
              aria-label={`Carrito de compras (${totalItems} productos)`}
            >
              <Icon icon="mdi:cart" style={{ width: 20, height: 20 }} />
              <span>Carrito</span>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems > 99 ? '99+' : totalItems}</span>
              )}
            </button>
          )}
          <a href="https://wa.me/50581088124" target="_blank" rel="noopener noreferrer" className="btn-primary overlay-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Escríbenos
          </a>
        </div>
      </div>
    </>
  );
}