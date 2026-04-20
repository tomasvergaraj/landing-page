import {
  MessageSquare,
  FileSearch,
  CalendarClock,
  Truck,
  ThumbsUp,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Process.css';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Contacto y datos de obra',
    desc: 'Escríbenos por WhatsApp, llámanos o envía correo con la ubicación, el volumen y la fecha estimada para tu vaciado.',
  },
  {
    icon: FileSearch,
    number: '02',
    title: 'Definición del hormigón',
    desc: 'Revisamos el tipo de hormigón que necesitas y, si hace falta, apoyamos la decisión con asesoría técnica.',
  },
  {
    icon: CalendarClock,
    number: '03',
    title: 'Programación del despacho',
    desc: 'Confirmamos horario, volumen, forma de pago y coordinación logística para que la entrega llegue alineada con tu obra.',
  },
  {
    icon: Truck,
    number: '04',
    title: 'Entrega en terreno',
    desc: 'Despachamos en toda la Quinta Región con una referencia operativa de 20 minutos por metro cúbico.',
  },
  {
    icon: ThumbsUp,
    number: '05',
    title: 'Soporte técnico',
    desc: 'Complementamos la entrega con apoyo de laboratoristas cuando el proyecto requiere una revisión más técnica.',
  },
];

export default function Process() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="proceso" className="process section">
      <div className="noise-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Cómo coordinamos tu pedido</span>
          <h2 className="section-title">Un flujo simple para cotizar y programar</h2>
          <p className="section-subtitle">
            Desde el primer mensaje hasta la entrega, ordenamos cada paso para que
            tengas claridad sobre tiempos, tipo de hormigón y forma de atención.
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
                  <p className="process__step-title">{step.title}</p>
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
