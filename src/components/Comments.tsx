import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Comments.css';

declare global {
  interface Window {
    DISQUS?: {
      reset: (config: {
        reload?: boolean;
        config?: (this: { page: { url: string; identifier: string } }) => void;
      }) => void;
    };
  }
}

export default function Comments() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageUrl = window.location.href;
    const pageIdentifier = pathname;

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = pageUrl;
          this.page.identifier = pageIdentifier;
        },
      });
      return;
    }

    const d = document;
    const s = d.createElement('script');
    s.src = 'https://mkdigital-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', String(+new Date()));
    s.async = true;
    (d.head || d.body).appendChild(s);

    return () => {
      s.remove();
    };
  }, [pathname]);

  return (
    <section className="section comments-section">
      <div className="container">
        <div className="section-header reveal reveal-up">
          <h2>Comentarios de clientes</h2>
          <p>Escribe tu comentario en base a la experiencia con nosotros.</p>
        </div>

        <div id="disqus_thread" className="disqus-container reveal reveal-up stagger-1"></div>
      </div>
    </section>
  );
}
