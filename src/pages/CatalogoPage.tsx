import { usePageMeta } from '../hooks/usePageMeta';
import CatalogoSection from '../components/CatalogoSection';

export default function CatalogoPage() {
  usePageMeta(
    'Catálogo - MKDIGITAL Nicaragua',
    'Catálogo de software original con precios actualizados. Office, Adobe, AutoCAD y más.',
  );

  return <CatalogoSection />;
}
