import { Quote, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Trust.css';

const testimonials = [
  {
    text: 'Excelente servicio y puntualidad. El hormigón llegó en perfectas condiciones y el equipo fue muy profesional en todo momento. Sin duda volveremos a trabajar con ellos.',
    author: 'Carlos M.',
    role: 'Contratista de Obras',
    rating: 5,
  },
  {
    text: 'Bugueño Hormigones nos ha acompañado en varios proyectos habitacionales. Su compromiso con la calidad y los plazos los convierte en un proveedor confiable para nuestra constructora.',
    author: 'Daniela R.',
    role: 'Jefa de Proyectos',
    rating: 5,
  },
  {
    text: 'La asesoría técnica que nos dieron fue clave para elegir el hormigón correcto. Muy buena comunicación desde la cotización hasta la entrega. Totalmente recomendados.',
    author: 'Roberto L.',
    role: 'Maestro de Obra',
    rating: 5,
  },
];

export default function Trust() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="testimonios" className="trust section">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Confianza y Respaldo</span>
          <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle">
            La satisfacción de nuestros clientes es el mejor reflejo de nuestro trabajo.
            Cada proyecto es una oportunidad para demostrar nuestro compromiso.
          </p>
        </div>

        <div className="trust__grid" ref={ref}>
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`trust__card ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="trust__card-quote">
                <Quote size={24} />
              </div>
              <div className="trust__card-stars">
                {Array.from({ length: testimonial.rating }).map((_, si) => (
                  <Star key={si} size={14} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>
              <p className="trust__card-text">{testimonial.text}</p>
              <div className="trust__card-author">
                <div className="trust__card-avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
