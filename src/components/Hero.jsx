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
          Hormigón premezclado desde Hijuelas para toda la Quinta Región
        </div>

        <h1 className="hero__title">
          Hormigón premezclado
          <br />
          <span className="hero__title-accent">desde Hijuelas</span>
          <br />
          para tu obra
        </h1>

        <p className="hero__subtitle">
          Despacho a obra, asesoría técnica y atención rápida para constructoras,
          contratistas y particulares en toda la Región de Valparaíso.
        </p>

        <div className="hero__actions">
          <a
            href={getWhatsAppLink()}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} />
            Pedir cotización
          </a>
          <a href="#servicios" className="btn btn-outline">
            Conocer servicios
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

      <a href="#nosotros" className="hero__scroll" aria-label="Ir a la sección Quiénes Somos">
        <ChevronDown size={24} />
      </a>

      <div className="hero__deco-line hero__deco-line--1" />
      <div className="hero__deco-line hero__deco-line--2" />
    </section>
  );
}
