import { usePageMeta } from '../hooks/usePageMeta';
import Hero from '../components/Hero';
import PromoSection from '../components/PromoSection';
import StatsSection from '../components/StatsSection';
import SoftwareLogos from '../components/SoftwareLogos';
import ProductosShowcase from '../components/ProductosShowcase';
import Promociones from '../components/Promociones';
import Services from '../components/Services';
import Software from '../components/Software';
import CTA from '../components/CTA';
import Colaboradores from '../components/Colaboradores';

export default function HomePage() {
  usePageMeta(
    'MKDIGITAL - Soporte técnico remoto en Nicaragua',
    'Soporte técnico remoto en toda Nicaragua. Instalación de Office, Adobe, AutoCAD, antivirus y más. Atención inmediata por WhatsApp.',
    'https://mkdigitalnic.com/soporte.jpg',
  );

  return (
    <>
      <Hero />
      <section className="reveal reveal-up">
        <PromoSection />
      </section>
      <section className="reveal reveal-up">
        <StatsSection />
      </section>
      <section className="reveal reveal-up">
        <SoftwareLogos />
      </section>
      <section className="reveal reveal-up">
        <ProductosShowcase />
      </section>
      <section className="reveal reveal-up">
        <Promociones />
      </section>
      <section className="reveal reveal-up">
        <Services />
      </section>
      <section className="reveal reveal-up">
        <Software />
      </section>
      <section className="reveal reveal-up">
        <CTA />
      </section>
      <section className="reveal reveal-up">
        <Colaboradores />
      </section>
    </>
  );
}
