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
    title: 'Planta certificada',
    desc: 'Trabajamos con una planta certificada para ofrecer un servicio respaldado desde el origen.',
  },
  {
    icon: CheckCircle2,
    title: 'Hormigones certificados',
    desc: 'Contamos con hormigones certificados y distintas alternativas para responder a diferentes necesidades de obra.',
  },
  {
    icon: Target,
    title: 'Tipos según tu proyecto',
    desc: 'Te ayudamos a definir el tipo de hormigón que mejor se ajusta al vaciado, la resistencia y la etapa constructiva.',
  },
  {
    icon: Timer,
    title: 'Entrega coordinada',
    desc: 'La referencia operativa es de 20 minutos por metro cúbico, facilitando la planificación del vaciado.',
  },
  {
    icon: HeartHandshake,
    title: 'Empresas y particulares',
    desc: 'Atendemos a empresas y particulares con la misma cercanía, seguimiento y disposición para resolver dudas.',
  },
  {
    icon: Zap,
    title: 'Pagos y cobertura',
    desc: 'Recibimos efectivo, transferencia, débito y crédito, con cobertura en toda la Quinta Región.',
  },
];

export default function Benefits() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="beneficios" className="benefits section">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Datos clave</span>
          <h2 className="section-title">Información clara para coordinar mejor</h2>
          <p className="section-subtitle">
            Antes de pedir tu hormigón, estos son los puntos que más
            consultan nuestros clientes y que hoy ya puedes revisar en un solo lugar.
          </p>
        </div>

        <div className="benefits__grid" ref={ref}>
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`benefits__item ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="benefits__icon-wrap">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <div className="benefits__text">
                  <p className="benefits__text-title">{benefit.title}</p>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
