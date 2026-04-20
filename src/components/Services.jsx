import {
  Truck,
  Building2,
  HardHat,
  Warehouse,
  ClipboardCheck,
  UsersRound,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { serviceItems } from '../content/services';
import './Services.css';

const serviceIcons = [
  Warehouse,
  Truck,
  Building2,
  HardHat,
  ClipboardCheck,
  UsersRound,
];

const services = serviceItems.map((service, index) => ({
  ...service,
  icon: serviceIcons[index],
}));

export default function Services() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="servicios" className="services section">
      <div className="noise-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Soluciones</span>
          <h2 className="section-title">Lo que hoy ofrece la planta</h2>
          <p className="section-subtitle">
            Información concreta para cotizar con claridad: tipos de
            hormigón, despacho, asesoría técnica y cobertura real.
          </p>
        </div>

        <div className="services__grid" ref={ref}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`services__card ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="services__card-icon">
                  <Icon size={28} />
                </div>
                <p className="services__card-title">{service.title}</p>
                <p className="services__card-desc">{service.description}</p>
                <div className="services__card-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
