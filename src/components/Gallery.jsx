import {
  Clock3,
  CreditCard,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Star,
  Truck,
} from 'lucide-react';
import {
  CONTACT_INFO,
  LOCATION_INFO,
  getEmailLink,
  getMapsLink,
  getPhoneLink,
  getReviewLink,
  getWhatsAppLink,
} from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import WhatsAppIcon from './WhatsAppIcon';
import './Gallery.css';

const infoCards = [
  {
    icon: MapPin,
    title: 'Dirección',
    text: CONTACT_INFO.address,
  },
  {
    icon: Clock3,
    title: 'Horario',
    text: `${CONTACT_INFO.weekdayHours} | ${CONTACT_INFO.saturdayHours}`,
  },
  {
    icon: Truck,
    title: 'Cobertura y despacho',
    text: `Cobertura en ${CONTACT_INFO.coverage} con referencia de ${CONTACT_INFO.deliveryTime}.`,
  },
  {
    icon: CreditCard,
    title: 'Medios de pago',
    text: CONTACT_INFO.payments.join(', '),
  },
];

export default function Gallery() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="ubicacion" className="location section">
      <div className="noise-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Ubicación y cobertura</span>
          <h2 className="section-title">Encuéntranos en Hijuelas</h2>
          <p className="section-subtitle">
            Revisa el mapa, la dirección exacta, los horarios y el enlace directo
            para dejar tu opinión en Google.
          </p>
        </div>

        <div className={`location__grid ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="location__map-card">
            <iframe
              className="location__map-frame"
              src={LOCATION_INFO.mapEmbedUrl}
              title="Mapa de Bugueño Hormigones"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="location__map-actions">
              <a
                href={getMapsLink()}
                className="btn btn-outline btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Abrir en Google Maps
              </a>
              <a
                href={getWhatsAppLink(
                  'Hola, quisiera coordinar un pedido de hormigón desde Hijuelas.',
                )}
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={16} />
                Coordinar pedido
              </a>
            </div>
          </div>

          <div className="location__side">
            <div className="location__cards">
              {infoCards.map(({ icon: Icon, title, text }) => (
                <article key={title} className="location__card">
                  <div className="location__card-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="location__card-title">{title}</p>
                    <p className="location__card-text">{text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="location__review">
              <div className="location__review-copy">
                <div className="location__review-badge">
                  <Star size={16} />
                  Enlace de opinión
                </div>
                <h3 className="location__review-title">Comparte tu experiencia</h3>
                <p className="location__review-text">
                  Escanea el código QR o usa el enlace directo para dejar tu
                  reseña en Google.
                </p>
                <div className="location__review-actions">
                  <a
                    href={getReviewLink()}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Star size={16} />
                    Dejar opinión
                  </a>
                </div>

                <div className="location__contact-list">
                  <a href={getPhoneLink()}>
                    <Phone size={16} />
                    {CONTACT_INFO.phone}
                  </a>
                  <a href={getEmailLink()}>
                    <Mail size={16} />
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="location__qr-wrap">
                <img
                  src={LOCATION_INFO.reviewQrPath}
                  alt="Código QR para dejar una opinión en Google"
                  className="location__qr"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
