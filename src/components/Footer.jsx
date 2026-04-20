import { MapPin, Phone, Mail, Clock, Star, MapPinned } from 'lucide-react';
import {
  SITE_CONFIG,
  CONTACT_INFO,
  getEmailLink,
  getMapsLink,
  getPhoneLink,
  getReviewLink,
  getWhatsAppLink,
} from '../config';
import WhatsAppIcon from './WhatsAppIcon';
import './Footer.css';

const quickLinks = [
  { label: 'Ir al inicio', href: '#hero' },
  { label: 'Conoce la empresa', href: '#nosotros' },
  { label: 'Explorar servicios', href: '#servicios' },
  { label: 'Ver respaldo', href: '#respaldo' },
  { label: 'Ver galería', href: '#proyectos' },
  { label: 'Abrir ubicación', href: '#ubicacion' },
  { label: 'Resolver dudas', href: '#faq' },
];

const serviceLinks = [
  { label: 'Tipos de hormigón', href: '#servicios' },
  { label: 'Asesoría técnica', href: '#respaldo' },
  { label: 'Fotos de obras', href: '#proyectos' },
  { label: 'Empresas y particulares', href: '#beneficios' },
  { label: 'Cobertura Quinta Región', href: '#ubicacion' },
  { label: 'Todo medio de pago', href: '#ubicacion' },
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
                Planta certificada y hormigones certificados, con despacho
                coordinado, apoyo técnico y cobertura en toda la Quinta
                Región.
              </p>
              <div className="footer__social">
                <a
                  href={getMapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir ubicación en Google Maps"
                >
                  <MapPinned size={18} />
                </a>
                <a
                  href={getReviewLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir enlace de opinión"
                >
                  <Star size={18} />
                </a>
                <a href={getEmailLink()} aria-label="Enviar correo">
                  <Mail size={18} />
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Escribir por WhatsApp a ${SITE_CONFIG.companyName}`}
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
                  <li key={service.label}>
                    <a href={service.href}>{service.label}</a>
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

              <div className="footer__actions">
                <a
                  href={getWhatsAppLink()}
                  className="btn btn-whatsapp btn-sm footer__wa-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} />
                  Cotizar por WhatsApp
                </a>
                <a
                  href={getReviewLink()}
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star size={16} />
                  Dejar opinión
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__meta">
            <p>
              © {currentYear} {SITE_CONFIG.companyName}. Atención desde Hijuelas para toda la Quinta Región.
            </p>
            <p className="footer__credit">
              Desarrollo web por{' '}
              <a
                href="https://nexosoftware.cl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nexo Software SpA
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
