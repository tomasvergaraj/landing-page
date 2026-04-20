/* ============================================
   CONFIGURACION DEL SITIO
   Edita estos valores para personalizar la web
   ============================================ */

const FULL_ADDRESS =
  'Hijuelas Maitenes - Bugueño Hormigones, sitio 2, 2310000 Hijuelas, Valparaíso';

const LOCATION_COORDINATES = {
  lat: -32.8463889,
  lng: -71.0925556,
};

const MAP_QUERY = encodeURIComponent(
  `${LOCATION_COORDINATES.lat},${LOCATION_COORDINATES.lng}`,
);

export const SITE_CONFIG = {
  companyName: 'Bugueño Hormigones',
  alternateNames: [
    'Bugueño Hormigones V Región',
    'Bugueño Hormigones Quinta Región',
    'Bugueño Hormigones Valparaíso',
  ],
  tagline: 'Planta certificada y hormigones certificados',
  slogan:
    'Diferentes tipos de hormigón, asesoría técnica y despacho coordinado para toda la Quinta Región.',
  logoPath: '/logo-horizontal.png',
};

const ENV_SITE_URL =
  (typeof import.meta !== 'undefined' &&
    (import.meta.env?.VITE_SITE_URL || import.meta.env?.SITE_URL)) ||
  '';

export const SEO_CONFIG = {
  language: 'es-CL',
  locale: 'es_CL',
  countryCode: 'CL',
  siteUrl: ENV_SITE_URL,
  defaultTitle: 'Bugueño Hormigones V Región | Planta certificada en Hijuelas',
  defaultDescription:
    'Bugueño Hormigones V Región: planta certificada y hormigones certificados en Hijuelas. Diferentes tipos de hormigón, asesoría técnica con laboratoristas, entregas coordinadas y cobertura en toda la Quinta Región.',
  keywords: [
    'Bugueño Hormigones V Región',
    'Bugueño Hormigones Quinta Región',
    'Bugueño Hormigones Valparaíso',
    'hormigón V Región',
    'hormigón Quinta Región',
    'hormigones certificados Hijuelas',
  ],
  faviconPath: '/logo-cuadrado.png',
  appleTouchIconPath: '/logo-cuadrado.png',
  organizationLogoPath: '/logo-cuadrado.png',
  organizationLogoWidth: 1254,
  organizationLogoHeight: 1254,
  ogImagePath: '/logo.png',
  themeColor: '#0A0A0A',
  serviceAreas: ['Hijuelas', 'Quinta Región', 'Región de Valparaíso'],
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:30',
    },
    {
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '13:00',
    },
  ],
};

export const CONTACT_INFO = {
  phone: '+56 9 9047 8670',
  phoneClean: '56990478670',
  whatsapp: '56990478670',
  whatsappMessage: 'Hola, me gustaría cotizar hormigón para mi proyecto.',
  email: 'buguenohormigones@gmail.com',
  address: FULL_ADDRESS,
  city: 'Hijuelas',
  region: 'Valparaíso',
  schedule: 'Lunes a viernes: 08:00 - 17:30 | Sábados: 08:00 - 13:00',
  weekdayHours: 'Lunes a viernes: 08:00 a 17:30',
  saturdayHours: 'Sábados: 08:00 a 13:00',
  coverage: 'Toda la Quinta Región',
  deliveryTime: '20 minutos por metro cúbico',
  payments: [
    'Efectivo',
    'Transferencia',
    'Tarjetas de débito',
    'Tarjetas de crédito',
  ],
  customerTypes: ['Empresas', 'Particulares'],
};

export const BUSINESS_FEATURES = [
  {
    title: 'Planta certificada',
    description:
      'Operación respaldada por una planta certificada para trabajar con mayor confianza desde la coordinación inicial.',
  },
  {
    title: 'Hormigones certificados',
    description:
      'Ofrecemos hormigones certificados para distintos requerimientos de obra y distintos tipos de vaciado.',
  },
  {
    title: 'Asesoría con laboratoristas',
    description:
      'Apoyo técnico para orientar la selección del hormigón y resolver dudas en cada proyecto.',
  },
  {
    title: 'Cobertura regional',
    description:
      'Despachamos desde Hijuelas y atendemos obras en toda la Quinta Región.',
  },
];

export const LOCATION_INFO = {
  coordinates: LOCATION_COORDINATES,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`,
  mapEmbedUrl: `https://www.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`,
  reviewUrl: 'https://g.page/r/CcEMcB7FzC9LEBI/review',
  reviewQrPath: '/descarga.png',
};

export const SOCIAL_LINKS = {};

export const getWhatsAppLink = (message) => {
  const msg = encodeURIComponent(message || CONTACT_INFO.whatsappMessage);
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${msg}`;
};

export const getPhoneLink = () => `tel:${CONTACT_INFO.phoneClean}`;
export const getEmailLink = () => `mailto:${CONTACT_INFO.email}`;
export const getMapsLink = () => LOCATION_INFO.mapsUrl;
export const getReviewLink = () => LOCATION_INFO.reviewUrl;
