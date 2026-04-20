import {
  ShieldCheck,
  ClipboardCheck,
  Building2,
  MapPin,
  CreditCard,
  CheckCircle2,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Trust.css';

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Calidad certificada',
    description:
      'Planta certificada y hormigones certificados para trabajar con mayor respaldo desde el inicio.',
  },
  {
    icon: ClipboardCheck,
    title: 'Asesoría técnica',
    description:
      'Apoyo de laboratoristas para orientar la selección del hormigón y revisar necesidades del proyecto.',
  },
  {
    icon: Building2,
    title: 'Atención amplia',
    description:
      'Atendemos a empresas y particulares, adaptando la coordinación a cada tipo de obra.',
  },
  {
    icon: MapPin,
    title: 'Cobertura en la región',
    description:
      'Despachamos en toda la Quinta Región desde nuestra ubicación en Hijuelas.',
  },
  {
    icon: CreditCard,
    title: 'Todo medio de pago',
    description:
      'Recibimos efectivo, transferencia, tarjetas de débito y tarjetas de crédito.',
  },
  {
    icon: CheckCircle2,
    title: 'Entrega coordinada',
    description:
      'Trabajamos con una referencia de 20 minutos por metro cúbico para ordenar mejor cada despacho.',
  },
];

export default function Trust() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="respaldo" className="trust section">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Respaldo real</span>
          <h2 className="section-title">Lo que hoy puedes resolver con nosotros</h2>
          <p className="section-subtitle">
            Esta es la información operativa y comercial que concentra el
            servicio actual de Bugueño Hormigones.
          </p>
        </div>

        <div className="trust__grid" ref={ref}>
          {trustPoints.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`trust__card ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="trust__card-icon">
                  <Icon size={24} />
                </div>
                <p className="trust__card-title">{item.title}</p>
                <p className="trust__card-text">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
