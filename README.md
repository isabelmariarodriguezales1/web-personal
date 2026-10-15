# Sitio web personal — Isabel María Rodríguez Alés

Versión inicial del sitio personal y profesional. Proyecto en React + Vite, en español, pensado para presentar servicios de desarrollo web y portfolio.

Instalación y ejecución local

```bash
npm install
npm run dev
```

Estructura
- `index.html` — punto de entrada
- `src/` — código fuente
- `src/components` — secciones de la página (Header, Hero, About, Services, Projects, Contact, Footer)
- `img/foto.jpg` — foto personal (ya incluida en el workspace)

Formulario de contacto
- El formulario disponible usa `mailto:` y abre el cliente de correo del usuario hacia `isabelmariarodriguezales@gmail.com`.
- Para recibir mensajes directamente desde la web (sin depender del cliente de correo del usuario) se recomienda configurar un endpoint serverless (Netlify Functions, Vercel Serverless, AWS Lambda, Cloudflare Workers, o un servicio como Formspree). Añadir instrucciones y URL del endpoint en `src/components/Contact.jsx`.

Tecnologías y despliegue
- Base: React + Vite. Opcionalmente añadir Tailwind o CSS-in-JS si se desea.
- Preparado para desplegar en Vercel, Netlify o cualquier hosting estático con build step.

Accesibilidad y privacidad
- Formulario con etiquetas accesibles y validación básica. Antes de añadir analítica o cookies, verificar obligaciones legales y privacidad.

Siguientes pasos recomendados
1. Ejecutar `npm install` y comprobar diseño en móvil/desktop.
2. Añadir captura o imagen de `cuantomecuestacontratar.es` en `img/` si quieres mostrar una miniatura en el portfolio.
3. Configurar endpoint serverless para recibir mensajes desde el formulario (si se desea).
4. Revisar y ajustar textos y experiencia visual.
