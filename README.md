# Bugueño Hormigones - Landing Page

Landing page profesional para **Bugueño Hormigones**, empresa especializada en venta y despacho de hormigón premezclado.

## Stack Tecnológico

- **React 18** + **Vite 5**
- **CSS Modules / CSS puro** con variables CSS
- **lucide-react** para iconografía
- **Google Fonts**: Bebas Neue + Barlow + Barlow Condensed

## Instalación y Ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```

## Estructura del Proyecto

```
bugueno-hormigones/
├── public/
│   └── logo.png              # Logo de la empresa
├── src/
│   ├── components/           # Componentes React
│   │   ├── Navbar.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── About.jsx/.css
│   │   ├── Services.jsx/.css
│   │   ├── Benefits.jsx/.css
│   │   ├── Process.jsx/.css
│   │   ├── Trust.jsx/.css
│   │   ├── Gallery.jsx/.css
│   │   ├── FAQ.jsx/.css
│   │   ├── CTA.jsx/.css
│   │   ├── Footer.jsx/.css
│   │   └── WhatsAppFloat.jsx/.css
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── styles/
│   │   └── global.css        # Variables y estilos base
│   ├── config.js             # ⚡ DATOS EDITABLES (contacto, redes, etc.)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Configuración de Datos

Todos los datos de contacto, redes sociales y textos están centralizados en `src/config.js`:

```js
// Editar datos de contacto
export const CONTACT_INFO = {
  phone: '+56 9 1234 5678',
  whatsapp: '56912345678',
  email: 'contacto@bugueñohormigones.cl',
  address: 'Av. Industrial 1234, Quillota, Valparaíso, Chile',
  schedule: 'Lunes a Viernes: 08:00 - 18:00 | Sábados: 08:00 - 13:00',
};

// Editar redes sociales
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/...',
  instagram: 'https://www.instagram.com/...',
  tiktok: 'https://www.tiktok.com/@...',
};
```

## Secciones de la Landing

1. **Navbar** - Logo, navegación con scroll suave, botón cotizar, menú hamburguesa móvil
2. **Hero** - Mensaje de impacto, CTAs, estadísticas
3. **Quiénes Somos** - Descripción de la empresa + highlights
4. **Servicios** - 6 tarjetas de servicios con íconos
5. **Beneficios** - 6 propuestas de valor
6. **Proceso** - Timeline de 5 pasos
7. **Testimonios** - 3 tarjetas (contenido de ejemplo, editable)
8. **Galería** - Grid de imágenes (placeholders para fotos reales)
9. **FAQ** - 6 preguntas frecuentes con acordeón
10. **CTA Final** - Llamado a la acción con botones de contacto
11. **Footer** - Enlaces, contacto, redes sociales
12. **WhatsApp Flotante** - Botón fijo con tooltip

## Personalización

### Imágenes
- Reemplazar placeholders en **Gallery.jsx** con `<img>` reales
- Agregar imagen de empresa en **About.jsx**
- Agregar imagen de fondo en **Hero** si se desea

### Testimonios
- Los testimonios en **Trust.jsx** son ejemplos editables
- Reemplazar con testimonios reales cuando estén disponibles

### Colores
- Las variables CSS están en `src/styles/global.css`
- Paleta principal: negro, dorado (#E8A817), blanco

## Características

- ✅ Responsive (mobile-first)
- ✅ Scroll suave entre secciones
- ✅ Animaciones al hacer scroll (IntersectionObserver)
- ✅ Botón flotante de WhatsApp
- ✅ SEO básico (meta tags, semántica)
- ✅ Accesibilidad (aria-labels, contraste)
- ✅ Código limpio y mantenible
- ✅ Datos centralizados para fácil edición
