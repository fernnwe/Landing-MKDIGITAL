import { usePageMeta } from '../hooks/usePageMeta';
import FAQ from '../components/FAQ';

export default function FaqPage() {
  usePageMeta(
    'Preguntas Frecuentes - MKDIGITAL Nicaragua',
    'Resolvemos tus dudas sobre instalación de programas, soporte técnico remoto, licencias y más en Nicaragua.',
  );

  return (
    <section className="reveal reveal-up">
      <FAQ />
    </section>
  );
}
