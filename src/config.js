/* ============================================
   CONFIGURACION DEL SITIO
   Edita estos valores para personalizar la web
   ============================================ */

export const SITE_CONFIG = {
  companyName: 'Bugue\u00f1o Hormigones',
  tagline: 'Hormig\u00f3n de calidad para tus proyectos',
  slogan: 'Compromiso, resistencia y puntualidad en cada entrega',
  logoPath: '/logo-horizontal.png',
};

export const SEO_CONFIG = {
  language: 'es-CL',
  locale: 'es_CL',
  countryCode: 'CL',
  siteUrl: '',
  defaultTitle:
    'Bugue\u00f1o Hormigones | Hormig\u00f3n premezclado desde Hijuelas',
  defaultDescription:
    'Hormig\u00f3n premezclado desde Hijuelas para obras en toda la Quinta Regi\u00f3n. Despacho a obra, asesor\u00eda t\u00e9cnica y cotizaci\u00f3n por WhatsApp.',
  ogImagePath: '/logo.png',
  themeColor: '#0A0A0A',
  serviceAreas: ['Hijuelas', 'Quinta Regi\u00f3n', 'Regi\u00f3n de Valpara\u00edso'],
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
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
  whatsappMessage: 'Hola, me gustar\u00eda cotizar hormig\u00f3n para mi proyecto.',
  email: 'contacto@buguenohormigones.cl',
  address: 'Hijuelas, Regi\u00f3n de Valpara\u00edso, Chile',
  city: 'Hijuelas',
  region: 'Valpara\u00edso',
  schedule: 'Lunes a Viernes: 08:00 - 18:00 | S\u00e1bados: 08:00 - 13:00',
};

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/buguenohormigones',
  instagram: 'https://www.instagram.com/buguenohormigones',
  tiktok: 'https://www.tiktok.com/@buguenohormigones',
};

export const getWhatsAppLink = (message) => {
  const msg = encodeURIComponent(message || CONTACT_INFO.whatsappMessage);
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${msg}`;
};

export const getPhoneLink = () => `tel:${CONTACT_INFO.phoneClean}`;
export const getEmailLink = () => `mailto:${CONTACT_INFO.email}`;
