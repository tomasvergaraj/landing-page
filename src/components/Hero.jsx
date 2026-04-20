import { Fragment } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import WhatsAppIcon from './WhatsAppIcon';
import './Hero.css';

const heroStats = [
  {
    value: 'CERT.',
    label: 'Planta y hormigones certificados',
  },
  {
    value: '20',
    label: 'Minutos por m3',
  },
  {
    value: 'V REG.',
    label: 'Cobertura regional',
  },
];

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
          Bugueño Hormigones V Región
        </div>

        <h1 className="hero__title">
          Hormigón
          <br />
          <span className="hero__title-accent">certificado</span>
          <br />
          para tu obra
        </h1>

        <p className="hero__subtitle">
          Bugueño Hormigones V Región ofrece diferentes tipos de hormigón, despacho coordinado desde
          Hijuelas, asesoría técnica con laboratoristas y atención
          para empresas y particulares en toda la Quinta Región.
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
          <a href="#ubicacion" className="btn btn-outline">
            Ver mapa y cobertura
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="hero__stats">
          {heroStats.map((stat, index) => (
            <Fragment key={stat.label}>
              <div className="hero__stat">
                <span className="hero__stat-number">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
              {index < heroStats.length - 1 ? (
                <div className="hero__stat-divider" aria-hidden="true" />
              ) : null}
            </Fragment>
          ))}
        </div>

        <p className="hero__subtitle hero__subtitle--micro">
          Referencia operativa: {CONTACT_INFO.deliveryTime}. Pagos por efectivo,
          transferencia, débito y crédito.
        </p>
      </div>

      <a
        href="#nosotros"
        className="hero__scroll"
        aria-label="Ir a la sección Quiénes Somos"
      >
        <ChevronDown size={24} />
      </a>

      <div className="hero__deco-line hero__deco-line--1" />
      <div className="hero__deco-line hero__deco-line--2" />
    </section>
  );
}
