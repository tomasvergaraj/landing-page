import { useEffect } from 'react';
import {
  CONTACT_INFO,
  SEO_CONFIG,
  SITE_CONFIG,
  SOCIAL_LINKS,
} from '../config';
import { faqs } from '../content/faqs';
import { serviceItems } from '../content/services';

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

function normalizeSiteUrl() {
  const configuredSiteUrl = SEO_CONFIG.siteUrl.trim();
  const baseUrl = configuredSiteUrl || window.location.origin;

  return baseUrl.replace(/\/+$/, '');
}

function normalizeAbsoluteUrl(pathname, siteUrl) {
  return new URL(pathname, `${siteUrl}/`).toString();
}

function normalizeExternalUrl(value) {
  try {
    return new URL(value).toString();
  } catch {
    return null;
  }
}

function buildStructuredData({ canonicalUrl, imageUrl, socialLinks }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${canonicalUrl}#website`,
        url: canonicalUrl,
        name: SITE_CONFIG.companyName,
        inLanguage: SEO_CONFIG.language,
        description: SEO_CONFIG.defaultDescription,
      },
      {
        '@type': 'Organization',
        '@id': `${canonicalUrl}#organization`,
        name: SITE_CONFIG.companyName,
        url: canonicalUrl,
        logo: imageUrl,
        image: imageUrl,
        sameAs: socialLinks,
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${canonicalUrl}#localbusiness`,
        name: SITE_CONFIG.companyName,
        url: canonicalUrl,
        image: imageUrl,
        logo: imageUrl,
        description: SEO_CONFIG.defaultDescription,
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: CONTACT_INFO.address,
          addressLocality: CONTACT_INFO.city,
          addressRegion: CONTACT_INFO.region,
          addressCountry: SEO_CONFIG.countryCode,
        },
        areaServed: SEO_CONFIG.serviceAreas,
        sameAs: socialLinks,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: CONTACT_INFO.phone,
            email: CONTACT_INFO.email,
            availableLanguage: ['es', SEO_CONFIG.language],
          },
        ],
        openingHoursSpecification: SEO_CONFIG.openingHours.map((entry) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: entry.dayOfWeek,
          opens: entry.opens,
          closes: entry.closes,
        })),
        makesOffer: serviceItems.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
          },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        url: `${canonicalUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };
}

export default function SEO() {
  useEffect(() => {
    const siteUrl = normalizeSiteUrl();
    const canonicalUrl = normalizeAbsoluteUrl(window.location.pathname, siteUrl);
    const imageUrl = normalizeAbsoluteUrl(SEO_CONFIG.ogImagePath, siteUrl);
    const socialLinks = Object.values(SOCIAL_LINKS)
      .map(normalizeExternalUrl)
      .filter(Boolean);

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
      buildStructuredData({ canonicalUrl, imageUrl, socialLinks }),
    );
  }, []);

  return null;
}
