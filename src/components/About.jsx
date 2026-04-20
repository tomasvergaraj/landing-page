import { Shield, Award, Users, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const highlights = [
  { icon: Shield, label: 'Planta certificada' },
  { icon: Award, label: 'Hormigones certificados' },
  { icon: Users, label: 'Empresas y particulares' },
  { icon: Clock, label: 'Asesoría con laboratoristas' },
];

export default function About() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="nosotros" className="about section">
      <div className="pattern-overlay" />
      <div className="container" ref={ref}>
        <div className={`about__grid ${visible ? 'visible' : ''}`}>
          <div className="about__image-col">
            <div className="about__image-wrapper">
              <div className="about__image-placeholder">
                <div className="about__image-icon">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 10h18" />
                    <path d="M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3" />
                    <path d="M6 14h12" />
                    <path d="M8 18h8" />
                    <path d="M10 10v8" />
                    <path d="M14 10v8" />
                  </svg>
                  <strong className="about__image-kicker">Desde Hijuelas</strong>
                  <span>Despachamos a toda la Quinta Región</span>
                  <p className="about__image-copy">
                    Servicio directo para empresas y particulares con apoyo técnico
                    y coordinación de entrega.
                  </p>
                </div>
              </div>
            </div>
            <div className="about__highlights">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="about__highlight">
                  <Icon size={18} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__text-col">
            <span className="section-label">Quiénes Somos</span>
            <h2 className="about__title">
              Respaldo técnico y servicio <span>para cada vaciado</span>
            </h2>
            <div className="gold-line" style={{ margin: '20px 0' }} />
            <p className="about__text">
              <strong>Bugueño Hormigones</strong> cuenta con planta certificada y
              hormigones certificados, entregando un respaldo real para proyectos que
              necesitan continuidad, coordinación y confianza.
            </p>
            <p className="about__text">
              Ofrecemos diferentes tipos de hormigón y coordinamos despachos desde
              Hijuelas hacia toda la Quinta Región. Como referencia operativa,
              trabajamos con tiempos de entrega de 20 minutos por metro cúbico.
            </p>
            <p className="about__text">
              Atendemos a empresas y particulares, aceptamos efectivo, transferencia,
              tarjetas de débito y crédito, y complementamos el servicio con
              asesoría técnica a través de laboratoristas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
