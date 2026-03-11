import { Camera, HardHat, Truck, Building } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Gallery.css';

const galleryItems = [
  { icon: Truck, label: 'Flota de Mixers', caption: 'Despacho profesional a obra' },
  { icon: Building, label: 'Obra en Ejecución', caption: 'Proyectos habitacionales' },
  { icon: HardHat, label: 'Equipo en Terreno', caption: 'Personal capacitado' },
  { icon: Camera, label: 'Entrega de Hormigón', caption: 'Puntualidad garantizada' },
  { icon: Building, label: 'Proyecto Finalizado', caption: 'Resultados que hablan' },
  { icon: Truck, label: 'Logística', caption: 'Coordinación eficiente' },
];

export default function Gallery() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="proyectos" className="gallery section">
      <div className="noise-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Proyectos y operación</span>
          <h2 className="section-title">Despachos y obras en terreno</h2>
          <p className="section-subtitle">
            Nuestra flota, equipo y operación en acción. Cada imagen refleja nuestro
            compromiso con la calidad y la capacidad operativa que nos respalda.
          </p>
        </div>

        <div className="gallery__grid" ref={ref}>
          {galleryItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`gallery__item ${i === 0 || i === 4 ? 'gallery__item--large' : ''} ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="gallery__placeholder">
                  <Icon size={36} strokeWidth={1.2} />
                  <span className="gallery__placeholder-label">{item.label}</span>
                  <span className="gallery__placeholder-hint">Reemplazar con foto real</span>
                </div>
                <div className="gallery__overlay">
                  <span className="gallery__caption">{item.caption}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
