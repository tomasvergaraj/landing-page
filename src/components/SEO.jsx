import { useEffect } from 'react';
import { SEO_CONFIG, SITE_CONFIG } from '../config';
import {
  buildStructuredData,
  getSocialLinks,
  normalizeAbsoluteUrl,
  normalizeSiteUrl,
} from '../seo';

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertJsonLd(id, graph) {
  let script = document.head.querySelector(`script[data-seo-id="${id}"]`);

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-id', id);
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(graph);
}

export default function SEO() {
  useEffect(() => {
    const siteUrl = normalizeSiteUrl(SEO_CONFIG.siteUrl || window.location.origin);
    const canonicalUrl = normalizeAbsoluteUrl(window.location.pathname, siteUrl);
    const imageUrl = normalizeAbsoluteUrl(SEO_CONFIG.ogImagePath, siteUrl);
    const logoUrl = normalizeAbsoluteUrl(
      SEO_CONFIG.organizationLogoPath,
      siteUrl,
    );
    const faviconUrl = normalizeAbsoluteUrl(SEO_CONFIG.faviconPath, siteUrl);
    const appleTouchIconUrl = normalizeAbsoluteUrl(
      SEO_CONFIG.appleTouchIconPath,
      siteUrl,
    );
    const socialLinks = getSocialLinks();

    document.documentElement.lang = SEO_CONFIG.language;
    document.title = SEO_CONFIG.defaultTitle;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: SEO_CONFIG.defaultDescription,
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    });
    upsertMeta('meta[name="googlebot"]', {
      name: 'googlebot',
      content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    });
    upsertMeta('meta[name="author"]', {
      name: 'author',
      content: SITE_CONFIG.companyName,
    });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: SEO_CONFIG.keywords.join(', '),
    });
    upsertMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: SEO_CONFIG.themeColor,
    });
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: SEO_CONFIG.locale,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_CONFIG.companyName,
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: SEO_CONFIG.defaultTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: SEO_CONFIG.defaultDescription,
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    });
    upsertMeta('meta[property="og:image:secure_url"]', {
      property: 'og:image:secure_url',
      content: imageUrl,
    });
    upsertMeta('meta[property="og:image:type"]', {
      property: 'og:image:type',
      content: 'image/png',
    });
    upsertMeta('meta[property="og:image:width"]', {
      property: 'og:image:width',
      content: '640',
    });
    upsertMeta('meta[property="og:image:height"]', {
      property: 'og:image:height',
      content: '641',
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: `${SITE_CONFIG.companyName} logo`,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: SEO_CONFIG.defaultTitle,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: SEO_CONFIG.defaultDescription,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    });
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: 'twitter:image:alt',
      content: `${SITE_CONFIG.companyName} logo`,
    });

    upsertLink('link[rel="icon"]', {
      rel: 'icon',
      type: 'image/png',
      sizes: `${SEO_CONFIG.organizationLogoWidth}x${SEO_CONFIG.organizationLogoHeight}`,
      href: faviconUrl,
    });
    upsertLink('link[rel="shortcut icon"]', {
      rel: 'shortcut icon',
      type: 'image/png',
      href: faviconUrl,
    });
    upsertLink('link[rel="apple-touch-icon"]', {
      rel: 'apple-touch-icon',
      href: appleTouchIconUrl,
    });
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });
    upsertLink('link[rel="alternate"][hreflang="es-CL"]', {
      rel: 'alternate',
      hreflang: 'es-CL',
      href: canonicalUrl,
    });
    upsertLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: canonicalUrl,
    });

    upsertJsonLd(
      'structured-data',
      buildStructuredData({ canonicalUrl, logoUrl, imageUrl, socialLinks }),
    );
  }, []);

  return null;
}
