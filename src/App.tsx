import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import CatalogoPage from './pages/CatalogoPage';
import MkFarmaPage from './pages/MkFarmaPage';
import DentalProPage from './pages/DentalProPage';
import ActivaLicenciaPage from './pages/ActivaLicenciaPage';
import AnyDeskPage from './pages/AnyDeskPage';
import BeneficiosPage from './pages/BeneficiosPage';
import FaqPage from './pages/FaqPage';
import SolucionesPage from './pages/SolucionesPage';
import ComentariosPage from './pages/ComentariosPage';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function SpotlightProvider() {
  const { pathname } = useLocation();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const els = document.querySelectorAll<HTMLElement>('.spotlight-card');
      for (let i = 0; i < els.length; i++) {
        const el = els[i];
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [pathname]);

  return null;
}

function RevealObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="/catalogo" element={<CatalogoPage />} />
      <Route path="/mkfarma" element={<MkFarmaPage />} />
      <Route path="/dentalpro" element={<DentalProPage />} />
      <Route path="/activa-licencia" element={<ActivaLicenciaPage />} />
      <Route path="/anydesk" element={<AnyDeskPage />} />
      <Route path="/beneficios" element={<BeneficiosPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/soluciones" element={<SolucionesPage />} />
      <Route path="/comentarios" element={<ComentariosPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <SpotlightProvider />
      <RevealObserver />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}
