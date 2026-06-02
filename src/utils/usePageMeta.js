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
 * Inject (or replace) the per-route JSON-LD block. Static, site-wide schema
 * (Organization, WebSite) lives in index.html and is never touched here so it
 * stays visible to crawlers that don't execute JS. This adds page-specific
 * graphs (BreadcrumbList, FAQPage, Article, …) for answer engines and agents.
 *
 * @param {object|object[]|null} data One or more schema.org objects.
 */
function setJsonLd(data) {
  const ID = 'page-jsonld';
  let el = document.getElementById(ID);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = ID;
    document.head.appendChild(el);
  }
  const graph = Array.isArray(data) ? data : [data];
  el.textContent = JSON.stringify(
    graph.length === 1 ? graph[0] : { '@context': 'https://schema.org', '@graph': graph },
  );
}

/**
 * Update document title and primary meta/OG/Twitter/canonical tags per route,
 * plus optional keywords and per-page JSON-LD structured data.
 *
 * @param {object} meta
 * @param {string} [meta.title]       Page title (suffixed with the site name).
 * @param {string} [meta.description] Meta + OG/Twitter description.
 * @param {string} [meta.path]        Route path, used for canonical + OG URLs.
 * @param {string} [meta.image]       Social card image (absolute or root-relative).
 * @param {string} [meta.keywords]    Comma-separated keywords for the page.
 * @param {object|object[]} [meta.jsonLd] schema.org object(s) for this route.
 */
export function usePageMeta({ title, description, path, image, keywords, jsonLd } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : BASE_TITLE;
    document.title = fullTitle;

    if (description) {
      setTag('meta[name="description"]', { name: 'description', content: description });
      setTag('meta[property="og:description"]', { property: 'og:description', content: description });
      setTag('meta[property="twitter:description"]', { property: 'twitter:description', content: description });
    }

    if (keywords) {
      setTag('meta[name="keywords"]', { name: 'keywords', content: keywords });
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

    setJsonLd(jsonLd);
    return () => setJsonLd(null);
  }, [title, description, path, image, keywords, jsonLd]);
}

/** Build a schema.org BreadcrumbList from [{name, path}] crumbs. */
export function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${ORIGIN}${it.path}`,
    })),
  };
}
