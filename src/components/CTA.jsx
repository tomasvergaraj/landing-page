import { Phone, ArrowRight } from 'lucide-react';
import { getWhatsAppLink, getPhoneLink } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import WhatsAppIcon from './WhatsAppIcon';
import './CTA.css';

export default function CTA() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="contacto" className="cta section">
      <div className="cta__bg">
        <div className="cta__gradient" />
        <div className="cta__grid-pattern" />
      </div>
      <div className="container" ref={ref}>
        <div className={`cta__content ${visible ? 'visible' : ''}`}>
          <span className="section-label">¿Listo para comenzar?</span>
          <h2 className="cta__title">Cotiza hoy tu proyecto de hormigón</h2>
          <p className="cta__subtitle">
            Contáctanos ahora y recibe atención rápida y personalizada.
            Estamos listos para apoyar tu obra en toda la Quinta Región.
          </p>
          <div className="cta__buttons">
            <a
              href={getWhatsAppLink()}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={20} />
              Escribir por WhatsApp
            </a>
            <a href={getPhoneLink()} className="btn btn-primary">
              <Phone size={20} />
              Llamar al equipo
            </a>
            <a href="#servicios" className="btn btn-outline">
              Ver soluciones
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
