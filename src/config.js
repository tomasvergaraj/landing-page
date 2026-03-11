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
    'Bugue\u00f1o Hormigones | Venta y despacho de hormig\u00f3n premezclado en Quillota',
  defaultDescription:
    'Venta y despacho de hormig\u00f3n premezclado para constructoras, contratistas y particulares en Quillota y la Region de Valparaiso. Cotiza por WhatsApp, telefono o correo.',
  ogImagePath: '/logo-horizontal.png',
  themeColor: '#0A0A0A',
  serviceAreas: ['Quillota', 'Valparaiso', 'Region de Valparaiso'],
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
  phone: '+56 9 1234 5678',
  phoneClean: '56912345678',
  whatsapp: '56912345678',
  whatsappMessage: 'Hola, me gustaria cotizar hormigon para mi proyecto.',
  email: 'contacto@buguenohormigones.cl',
  address: 'Av. Industrial 1234, Quillota, Valparaiso, Chile',
  city: 'Quillota',
  region: 'Valparaiso',
  schedule: 'Lunes a Viernes: 08:00 - 18:00 | Sabados: 08:00 - 13:00',
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
