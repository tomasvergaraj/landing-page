import {
  CheckCircle2,
  Timer,
  HeartHandshake,
  ShieldCheck,
  Zap,
  Target,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Benefits.css';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Calidad Certificada',
    desc: 'Hormigón premezclado que cumple con los más altos estándares de resistencia y durabilidad para cada tipo de proyecto.',
  },
  {
    icon: Timer,
    title: 'Puntualidad Garantizada',
    desc: 'Cumplimos con los plazos de entrega acordados. Sabemos que el tiempo en obra es dinero, y no te fallamos.',
  },
  {
    icon: HeartHandshake,
    title: 'Atención Personalizada',
    desc: 'Cada cliente recibe un trato directo y cercano. Nos involucramos en tu proyecto para darte la mejor solución.',
  },
  {
    icon: Target,
    title: 'Experiencia Comprobada',
    desc: 'Más de una década en el rubro nos respalda. Hemos participado en cientos de proyectos de diversa envergadura.',
  },
  {
    icon: Zap,
    title: 'Respuesta Rápida',
    desc: 'Cotizaciones ágiles y coordinación eficiente. Desde tu primer contacto hasta la entrega, trabajamos con rapidez.',
  },
  {
    icon: CheckCircle2,
    title: 'Compromiso Total',
    desc: 'Nuestro nombre está en cada entrega. Trabajamos con responsabilidad y transparencia de principio a fin.',
  },
];

export default function Benefits() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="beneficios" className="benefits section">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">¿Por Qué Elegirnos?</span>
          <h2 className="section-title">Tu Proyecto Merece el Mejor Respaldo</h2>
          <p className="section-subtitle">
            Cada detalle cuenta cuando se trata de la base de tu construcción.
            Con nosotros, tienes la certeza de un servicio sólido y profesional.
          </p>
        </div>

        <div className="benefits__grid" ref={ref}>
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`benefits__item ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="benefits__icon-wrap">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <div className="benefits__text">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
