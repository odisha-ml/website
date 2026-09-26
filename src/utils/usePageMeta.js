import { useEffect } from 'react';

const SITE_NAME = 'Odisha AI';
const BASE_TITLE = 'Odisha AI — The Global AI Community of Odias';
const ORIGIN = 'https://www.odishaai.org';

/** Set or update a <meta>/<link> tag by attribute, creating it if missing. */
function setTag(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

/**
 * Update document title and primary meta/OG/Twitter/canonical tags per route.
 *
 * @param {{title?: string, description?: string, path?: string, image?: string}} meta
 */
export function usePageMeta({ title, description, path, image } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : BASE_TITLE;
    document.title = fullTitle;

    if (description) {
      setTag('meta[name="description"]', { name: 'description', content: description });
      setTag('meta[property="og:description"]', { property: 'og:description', content: description });
      setTag('meta[property="twitter:description"]', { property: 'twitter:description', content: description });
    }

    setTag('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    setTag('meta[property="twitter:title"]', { property: 'twitter:title', content: fullTitle });

    if (path != null) {
      const url = `${ORIGIN}${path}`;
      setTag('link[rel="canonical"]', { rel: 'canonical', href: url });
      setTag('meta[property="og:url"]', { property: 'og:url', content: url });
      setTag('meta[property="twitter:url"]', { property: 'twitter:url', content: url });
    }

    if (image) {
      const img = image.startsWith('http') ? image : `${ORIGIN}${image}`;
      setTag('meta[property="og:image"]', { property: 'og:image', content: img });
      setTag('meta[property="twitter:image"]', { property: 'twitter:image', content: img });
    }
  }, [title, description, path, image]);
}
