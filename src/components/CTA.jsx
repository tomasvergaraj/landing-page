import { Mail, Phone } from 'lucide-react';
import { getEmailLink, getPhoneLink, getWhatsAppLink } from '../config';
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
          <span className="section-label">Contacto directo</span>
          <h2 className="cta__title">Cotiza tu pedido hoy</h2>
          <p className="cta__subtitle">
            Estamos disponibles para empresas y particulares por WhatsApp,
            llamada o correo, con atención desde Hijuelas para toda la
            Quinta Región.
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
            <a href={getEmailLink()} className="btn btn-outline">
              <Mail size={18} />
              Enviar correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
