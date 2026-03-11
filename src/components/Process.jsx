import { MessageSquare, FileSearch, CalendarClock, Truck, ThumbsUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Process.css';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Contacto',
    desc: 'Comunícate con nosotros por WhatsApp, teléfono o correo. Cuéntanos sobre tu proyecto y necesidades.',
  },
  {
    icon: FileSearch,
    number: '02',
    title: 'Evaluación y Cotización',
    desc: 'Analizamos los requerimientos de tu obra y te entregamos una cotización detallada y transparente.',
  },
  {
    icon: CalendarClock,
    number: '03',
    title: 'Coordinación',
    desc: 'Planificamos la logística de entrega según los tiempos y condiciones de tu proyecto.',
  },
  {
    icon: Truck,
    number: '04',
    title: 'Despacho y Entrega',
    desc: 'Nuestros mixers llegan puntualmente a tu obra con el hormigón en las condiciones óptimas.',
  },
  {
    icon: ThumbsUp,
    number: '05',
    title: 'Seguimiento',
    desc: 'Realizamos seguimiento post-entrega para asegurar tu satisfacción total con nuestro servicio.',
  },
];

export default function Process() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="proceso" className="process section">
      <div className="noise-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Cómo Trabajamos</span>
          <h2 className="section-title">Un Proceso Simple, Eficiente y Confiable</h2>
          <p className="section-subtitle">
            Desde tu primer contacto hasta la entrega final, cada paso está diseñado
            para que tu experiencia sea fluida y sin complicaciones.
          </p>
        </div>

        <div className="process__timeline" ref={ref}>
          <div className="process__line" />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`process__step ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="process__step-marker">
                  <span className="process__step-number">{step.number}</span>
                </div>
                <div className="process__step-card">
                  <div className="process__step-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-desc">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
