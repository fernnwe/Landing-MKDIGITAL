import { usePageMeta } from '../hooks/usePageMeta';
import DownloadAnyDesk from '../components/DownloadAnyDesk';

export default function AnyDeskPage() {
  usePageMeta(
    'Descargar AnyDesk - MKDIGITAL Nicaragua',
    'Descarga AnyDesk gratis para soporte técnico remoto. Conexión rápida y segura con nuestro equipo de soporte en Nicaragua.',
  );

  return (
    <section className="reveal reveal-up">
      <DownloadAnyDesk />
    </section>
  );
}
