import { useEffect } from 'react';

const DEFAULT_TITLE = 'MKDIGITAL - Soporte técnico remoto en Nicaragua';
const DEFAULT_DESC =
  'Soporte técnico remoto en toda Nicaragua. Instalación de programas, Office, Adobe, eliminación de virus y optimización de PC sin salir de casa. Atención inmediata por WhatsApp.';
const DEFAULT_OG_IMAGE = 'https://mkdigitalnic.com/logo.svg';

export function usePageMeta(title?: string, description?: string, ogImage?: string) {
  const pageTitle = title || DEFAULT_TITLE;
  const pageDesc = description || DEFAULT_DESC;
  const pageOgImage = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    document.title = pageTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', pageDesc);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', pageTitle);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', pageDesc);
    document
      .querySelector('meta[property="og:image"]')
      ?.setAttribute('content', pageOgImage);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute('content', window.location.href);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', window.location.href);
  }, [pageTitle, pageDesc, pageOgImage]);
}
