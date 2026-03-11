import { ChevronDown, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import WhatsAppIcon from './WhatsAppIcon';
import './Hero.css';

export default function Hero() {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__grid-pattern" />
        <div className="noise-overlay" />
      </div>

      <div className={`hero__content container ${visible ? 'visible' : ''}`}>
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Hormigón Premezclado de Alta Calidad
        </div>

        <h1 className="hero__title">
          Soluciones en<br />
          <span className="hero__title-accent">Hormigón</span> para<br />
          tus Proyectos
        </h1>

        <p className="hero__subtitle">
          Compromiso, resistencia y puntualidad en cada entrega.
          Atendemos constructoras, contratistas y particulares con la calidad que tu obra necesita.
        </p>

        <div className="hero__actions">
          <a
            href={getWhatsAppLink()}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} />
            Cotizar por WhatsApp
          </a>
          <a href="#servicios" className="btn btn-outline">
            Ver Servicios
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">500+</span>
            <span className="hero__stat-label">Proyectos Entregados</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">10+</span>
            <span className="hero__stat-label">Años de Experiencia</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Compromiso</span>
          </div>
        </div>
      </div>

      <a href="#nosotros" className="hero__scroll" aria-label="Scroll hacia abajo">
        <ChevronDown size={24} />
      </a>

      {/* Decorative elements */}
      <div className="hero__deco-line hero__deco-line--1" />
      <div className="hero__deco-line hero__deco-line--2" />
    </section>
  );
}
