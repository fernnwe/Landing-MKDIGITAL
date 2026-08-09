import { usePageMeta } from '../hooks/usePageMeta';
import Comments from '../components/Comments';

export default function ComentariosPage() {
  usePageMeta(
    'Comentarios - MKDIGITAL Nicaragua',
    'Opiniones y reseñas de nuestros clientes en Nicaragua. Comparte tu experiencia con nuestro servicio.',
  );

  return (
    <section className="reveal reveal-up">
      <Comments />
    </section>
  );
}
