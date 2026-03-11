import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { faqs } from '../content/faqs';
import './FAQ.css';

function FAQItem({ question, answer, isOpen, toggle }) {
  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={toggle} aria-expanded={isOpen}>
        <span>{question}</span>
        <ChevronDown size={20} className="faq__chevron" />
      </button>
      <div className="faq__answer-wrap">
        <p className="faq__answer">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="faq" className="faq section">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Preguntas Frecuentes</span>
          <h2 className="section-title">Resuelve tus Dudas</h2>
          <p className="section-subtitle">
            Encuentra respuesta a las consultas más comunes sobre nuestros servicios y proceso de trabajo.
          </p>
        </div>

        <div className={`faq__list ${visible ? 'visible' : ''}`} ref={ref}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
