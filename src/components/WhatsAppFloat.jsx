import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { getWhatsAppLink, SITE_CONFIG } from '../config';
import WhatsAppIcon from './WhatsAppIcon';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    const hideTooltip = setTimeout(() => setTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTooltip);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="wa-float">
      {tooltip && (
        <div className="wa-float__tooltip">
          <button
            className="wa-float__tooltip-close"
            onClick={() => setTooltip(false)}
            aria-label="Cerrar"
          >
            <X size={12} />
          </button>
          <span>¿Necesitas cotizar? ¡Escríbenos!</span>
        </div>
      )}
      <a
        href={getWhatsAppLink()}
        className="wa-float__btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contactar a ${SITE_CONFIG.companyName} por WhatsApp`}
      >
        <WhatsAppIcon size={30} className="wa-float__icon" />
        <span className="wa-float__pulse" />
      </a>
    </div>
  );
}
