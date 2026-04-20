import { Camera, HardHat, Truck, Building2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ProjectGallery.css';

const galleryItems = [
  {
    icon: Truck,
    label: 'Mixer en ruta',
    caption: 'Despacho en camino hacia obras de toda la Quinta Región.',
    imageSrc: '/mixer en ruta.jpeg',
  },
  {
    icon: Building2,
    label: 'Vaciado en terreno',
    caption: 'Hormigonado en obra con coordinación y respuesta oportuna.',
    imageSrc: '/vaciado en terreno.jpeg',
  },
  {
    icon: HardHat,
    label: 'Equipo en obra',
    caption: 'Apoyo en terreno para acompañar cada etapa del proyecto.',
    imageSrc: '/equipo en obra.jpeg',
  },
  {
    icon: Camera,
    label: 'Entrega coordinada',
    caption: 'Logística planificada para cumplir tiempos y continuidad de faena.',
    imageSrc: '/entrega coordinada.jpeg',
  },
  {
    icon: Building2,
    label: 'Proyecto ejecutado',
    caption: 'Resultados concretos en obras terminadas con hormigón certificado.',
    imageSrc: '/proyecto ejecutado.jpeg',
  },
  {
    icon: Truck,
    label: 'Operación y flota',
    caption: 'Capacidad operativa para atender pedidos de empresas y particulares.',
    imageSrc: '/operacion y flota.jpeg',
  },
];

export default function ProjectGallery() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="proyectos" className="project-gallery section">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Galería de obras</span>
          <h2 className="section-title">Fotos de despachos y proyectos</h2>
          <p className="section-subtitle">
            Revisa parte del trabajo en terreno, la operación de despacho y los
            proyectos donde Bugueño Hormigones acompaña cada entrega.
          </p>
        </div>

        <div className="project-gallery__grid" ref={ref}>
          {galleryItems.map((item, i) => {
            const Icon = item.icon;
            const isLarge = i === 0 || i === 4;

            return (
              <article
                key={item.label}
                className={`project-gallery__item ${
                  isLarge ? 'project-gallery__item--large' : ''
                } ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {item.imageSrc ? (
                  <img
                    src={item.imageSrc}
                    alt={item.label}
                    className="project-gallery__image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-gallery__placeholder">
                    <Icon size={36} strokeWidth={1.2} />
                    <span className="project-gallery__placeholder-label">
                      {item.label}
                    </span>
                    <span className="project-gallery__placeholder-hint">
                      Reemplazar con foto real
                    </span>
                  </div>
                )}

                <div className="project-gallery__overlay">
                  <span className="project-gallery__caption">{item.caption}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
