import {
  CONTACT_INFO,
  LOCATION_INFO,
  SEO_CONFIG,
  SITE_CONFIG,
  SOCIAL_LINKS,
} from './config';
import { faqs } from './content/faqs';
import { serviceItems } from './content/services';

export function normalizeSiteUrl(value = '') {
  return value.trim().replace(/\/+$/, '');
}

export function normalizeAbsoluteUrl(pathname, siteUrl) {
  return new URL(pathname, `${siteUrl}/`).toString();
}

export function normalizeExternalUrl(value) {
  try {
    return new URL(value).toString();
  } catch {
    return null;
  }
}

export function getSocialLinks() {
  return [...new Set(Object.values(SOCIAL_LINKS).map(normalizeExternalUrl).filter(Boolean))];
}

function buildLogoObject(logoUrl) {
  return {
    '@type': 'ImageObject',
    url: logoUrl,
    contentUrl: logoUrl,
    width: SEO_CONFIG.organizationLogoWidth,
    height: SEO_CONFIG.organizationLogoHeight,
    caption: SITE_CONFIG.companyName,
  };
}

function buildPostalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address,
    addressLocality: CONTACT_INFO.city,
    addressRegion: CONTACT_INFO.region,
    addressCountry: SEO_CONFIG.countryCode,
  };
}

function buildContactPoint() {
  return {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    availableLanguage: ['es', SEO_CONFIG.language],
  };
}

export function buildStructuredData({
  canonicalUrl,
  logoUrl,
  imageUrl,
  socialLinks,
}) {
  const logo = buildLogoObject(logoUrl);
  const address = buildPostalAddress();
  const contactPoint = buildContactPoint();

  const organization = {
    '@type': 'Organization',
    '@id': `${canonicalUrl}#organization`,
    name: SITE_CONFIG.companyName,
    alternateName: SITE_CONFIG.alternateNames,
    url: canonicalUrl,
    logo,
    image: imageUrl,
    description: SEO_CONFIG.defaultDescription,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address,
    contactPoint: [contactPoint],
  };

  if (socialLinks.length) {
    organization.sameAs = socialLinks;
  }

  const localBusiness = {
    '@type': 'LocalBusiness',
    '@id': `${canonicalUrl}#localbusiness`,
    name: SITE_CONFIG.companyName,
    alternateName: SITE_CONFIG.alternateNames,
    url: canonicalUrl,
    image: imageUrl,
    logo,
    description: SEO_CONFIG.defaultDescription,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    hasMap: LOCATION_INFO.mapsUrl,
    paymentAccepted: CONTACT_INFO.payments.join(', '),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LOCATION_INFO.coordinates.lat,
      longitude: LOCATION_INFO.coordinates.lng,
    },
    address,
    areaServed: SEO_CONFIG.serviceAreas,
    contactPoint: [contactPoint],
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
  };

  if (socialLinks.length) {
    localBusiness.sameAs = socialLinks;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${canonicalUrl}#website`,
        url: canonicalUrl,
        name: SITE_CONFIG.companyName,
        alternateName: SITE_CONFIG.alternateNames,
        inLanguage: SEO_CONFIG.language,
        description: SEO_CONFIG.defaultDescription,
      },
      organization,
      localBusiness,
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
