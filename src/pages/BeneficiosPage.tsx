import { usePageMeta } from '../hooks/usePageMeta';
import Benefits from '../components/Benefits';
import GrowthStats from '../components/GrowthStats';

export default function BeneficiosPage() {
  usePageMeta(
    'Beneficios - MKDIGITAL Nicaragua',
    '¿Por qué elegir MKDIGITAL? Soporte técnico remoto, instalación de programas, precios justos y atención personalizada en Nicaragua.',
  );

  return (
    <>
      <section className="reveal reveal-up">
        <Benefits />
      </section>
      <section className="reveal reveal-up">
        <GrowthStats />
      </section>
    </>
  );
}
