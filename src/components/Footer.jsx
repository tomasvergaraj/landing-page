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

/* TikTok icon (lucide-react doesn't include it) */
function TikTokIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.81.1v-3.5a6.37 6.37 0 00-.81-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.28 8.28 0 004.76 1.5V6.79a4.83 4.83 0 01-1-.1z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
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
            {/* Brand column */}
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
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon size={18} />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Enlaces</h4>
              <ul className="footer__links">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h4 className="footer__col-title">Servicios</h4>
              <ul className="footer__links">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <a href="#servicios">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contacto</h4>
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
                WhatsApp
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
