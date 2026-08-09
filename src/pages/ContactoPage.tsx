import { usePageMeta } from '../hooks/usePageMeta';
import Contact from '../components/Contact';

export default function ContactoPage() {
  usePageMeta(
    'Contacto - MKDIGITAL Nicaragua',
    'Contáctanos por WhatsApp o correo. Soporte técnico remoto en toda Nicaragua.',
  );

  return (
    <section className="reveal reveal-up">
      <Contact />
    </section>
  );
}
