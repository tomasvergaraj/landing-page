import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
} from 'lucide-react';
import {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  getWhatsAppLink,
  getPhoneLink,
  getEmailLink,
} from '../config';
import WhatsAppIcon from './WhatsAppIcon';
import './Footer.css';

function TikTokIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.81.1v-3.5a6.37 6.37 0 00-.81-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.28 8.28 0 004.76 1.5V6.79a4.83 4.83 0 01-1-.1z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Ir al inicio', href: '#hero' },
  { label: 'Conoce la empresa', href: '#nosotros' },
  { label: 'Explorar servicios', href: '#servicios' },
  { label: 'Ver ventajas', href: '#beneficios' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Ver proyectos', href: '#proyectos' },
];

const serviceLinks = [
  'Venta de Hormigón',
  'Despacho a Obra',
  'Proyectos Habitacionales',
  'Asesoría Técnica',
  'Obras Menores y Mayores',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <img
                src={SITE_CONFIG.logoPath}
                alt={SITE_CONFIG.companyName}
                className="footer__logo"
              />
              <p className="footer__brand-text">
                Empresa especializada en la producción y despacho de hormigón premezclado
                de alta calidad. Compromiso, experiencia y servicio profesional para cada proyecto.
              </p>
              <div className="footer__social">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <TikTokIcon size={18} />
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Escribir por WhatsApp a Bugueño Hormigones"
                >
                  <WhatsAppIcon size={18} />
                </a>
              </div>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Enlaces</p>
              <ul className="footer__links">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Servicios</p>
              <ul className="footer__links">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <a href="#servicios">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Contacto</p>
              <ul className="footer__contact">
                <li>
                  <MapPin size={16} />
                  <span>{CONTACT_INFO.address}</span>
                </li>
                <li>
                  <Phone size={16} />
                  <a href={getPhoneLink()}>{CONTACT_INFO.phone}</a>
                </li>
                <li>
                  <Mail size={16} />
                  <a href={getEmailLink()}>{CONTACT_INFO.email}</a>
                </li>
                <li>
                  <Clock size={16} />
                  <span>{CONTACT_INFO.schedule}</span>
                </li>
              </ul>
              <a
                href={getWhatsAppLink()}
                className="btn btn-whatsapp btn-sm footer__wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={16} />
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {currentYear} {SITE_CONFIG.companyName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
