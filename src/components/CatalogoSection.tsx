import { useMemo, useState } from 'react';
import { Icon } from '@iconify/react';
import { productos, categorias } from '../data/productos';
import ProductCard from './ProductCard';
import CurrencyConverter from './CurrencyConverter';
import './CatalogoSection.css';

export default function CatalogoSection() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const q = query.trim().toLowerCase();

  const visibleCount = useMemo(() => {
    let count = 0;
    productos.forEach((p) => {
      const matchCat = filter === 'all' || p.categoria === filter;
      const matchSearch = p.nombre.toLowerCase().includes(q);
      if (matchCat && matchSearch) count++;
    });
    return count;
  }, [q, filter]);

  return (
    <section className="catalogo" id="catalogo">
      <div className="catalogo-hero">
        <div className="catalogo-hero-bg">
          <div className="hero-orb orb-1"></div>
          <div className="hero-orb orb-2"></div>
        </div>
        <div className="container hero-content">
          <div className="badge reveal reveal-down">
            <Icon icon="mdi:layers" />
            CATÁLOGO DE SOFTWARE
          </div>
          <h1 className="reveal reveal-up stagger-2">
            Encuentra el software que <span className="text-accent">necesitas</span>
          </h1>
          <p className="reveal reveal-up stagger-3">
            Todos los programas que instalamos a precio justo, con soporte remoto incluido
          </p>
          <div className="licencias-badge reveal reveal-up stagger-4">
            <Icon icon="mdi:check-circle" />
            Licencias Originales
          </div>

          <div className="licencias-strip reveal reveal-up stagger-5">
            <div className="licencias-track">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => (
                <div key={n} className="licencia-thumb">
                  <img src={`/licencias/${n}.jpg`} alt={`Licencia Original ${n}`} loading="lazy" />
                </div>
              ))}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => (
                <div key={`b-${n}`} className="licencia-thumb">
                  <img src={`/licencias/${n}.jpg`} alt={`Licencia Original ${n}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="catalogo-body">
        <div className="container">
          <div className="search-filters glass">
            <div className="search-bar">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
              <input type="text" placeholder="Buscar producto..." autoComplete="off" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>

            <div className="filter-tabs">
              <button className={`filter-tab${filter === 'all' ? ' active' : ''}`} onClick={() => setFilter('all')}>
                <Icon icon="mdi:grid" />
                Todos
              </button>
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-tab${filter === cat.id ? ' active' : ''}`}
                  style={{ ['--cat-color' as string]: cat.color }}
                  onClick={() => setFilter(cat.id)}
                >
                  <span className="tab-icon"><Icon icon={cat.iconoId} /></span>
                  {cat.nombre}
                </button>
              ))}
            </div>
          </div>

          <CurrencyConverter />

          {categorias.map((cat) => {
            const items = productos.filter((p) => p.categoria === cat.id);
            const hasVisible = items.some(
              (p) => (filter === 'all' || p.categoria === filter) && p.nombre.toLowerCase().includes(q),
            );
            const showSection = (filter === 'all' || cat.id === filter) && hasVisible;

            return (
              <div className="cat-section" data-categoria={cat.id} style={showSection ? undefined : { display: 'none' }}>
                <div className="cat-header card reveal reveal-up">
                  <span className="cat-icon" style={{ background: cat.bgGradient }}>
                    <Icon icon={cat.iconoId} color="#FFFFFF" />
                  </span>
                  <div>
                    <h2 className="cat-title">{cat.nombre}</h2>
                    <p className="cat-count">{items.length} producto{items.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>
                <div className="productos-grid">
                  {items.map((p, i) => {
                    const matchCat = filter === 'all' || p.categoria === filter;
                    const matchSearch = p.nombre.toLowerCase().includes(q);
                    const show = matchCat && matchSearch;
                    return (
                      <div
                        key={p.id}
                        className={`product-wrapper reveal reveal-up stagger-${Math.min((i % 3) + 1, 3)}`}
                        style={show ? undefined : { display: 'none' }}
                      >
                        <ProductCard producto={p} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="empty-state" style={visibleCount > 0 ? { display: 'none' } : { display: 'flex' }}>
            <Icon icon="mdi:search" />
            <h3>Sin resultados</h3>
            <p>No encontramos productos que coincidan con tu búsqueda</p>
            <button
              className="btn-outline"
              onClick={() => {
                setQuery('');
                setFilter('all');
              }}
            >
              Limpiar filtros
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
