import { Shield, Award, Users, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const highlights = [
  { icon: Shield, label: 'Calidad Garantizada' },
  { icon: Award, label: 'Experiencia Comprobada' },
  { icon: Users, label: 'Atención Personalizada' },
  { icon: Clock, label: 'Entregas Puntuales' },
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
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Imagen de la empresa</span>
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
              Más de una década construyendo <span>confianza</span>
            </h2>
            <div className="gold-line" style={{ margin: '20px 0' }} />
            <p className="about__text">
              <strong>Bugueño Hormigones</strong> es una empresa especializada en la producción y
              despacho de hormigón premezclado de alta calidad. Con más de 10 años de experiencia
              en el rubro de la construcción, nos hemos consolidado como un referente confiable
              para constructoras, contratistas y particulares.
            </p>
            <p className="about__text">
              Nuestro compromiso va más allá de entregar un producto: ofrecemos una experiencia
              completa de servicio, desde la asesoría técnica inicial hasta el seguimiento posterior
              a la entrega. Cada metro cúbico que despachamos lleva el respaldo de procesos
              rigurosos de calidad y un equipo humano altamente comprometido.
            </p>
            <p className="about__text">
              Nos diferenciamos por nuestra puntualidad, flexibilidad y atención personalizada.
              Entendemos que cada proyecto tiene necesidades únicas, y adaptamos nuestro servicio
              para garantizar que tu obra avance sin contratiempos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
