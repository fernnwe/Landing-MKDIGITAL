import { usePageMeta } from '../hooks/usePageMeta';
import SolucionProblemas from '../components/SolucionProblemas';

export default function SolucionesPage() {
  usePageMeta(
    'Soluciones - MKDIGITAL Nicaragua',
    'Soluciones de software para hogares y empresas en Nicaragua. Instalación, configuración y soporte técnico remoto.',
  );

  return (
    <section className="reveal reveal-up">
      <SolucionProblemas />
    </section>
  );
}
