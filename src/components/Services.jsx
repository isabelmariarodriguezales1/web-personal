import React from 'react'

const items = [
  {title: 'Desarrollo web', desc: 'Páginas web profesionales, adaptadas a móviles y optimizadas para rendimiento.'},
  {title: 'Aplicaciones web', desc: 'Herramientas y aplicaciones interactivas a medida: formularios, paneles, automatizaciones.'},
  {title: 'APIs e integraciones', desc: 'Conexión entre servicios, automatización y desarrollo de APIs seguras.'},
  {title: 'IA y automatización', desc: 'Prototipos y funciones basadas en IA: chatbots, recuperación de información y automatización.'},
  {title: 'Mantenimiento', desc: 'Actualizaciones, correcciones y evolución de proyectos web.'}
]

export default function Services(){
  return (
    <section id="servicios" className="services container">
      <h2>Servicios</h2>
      <div className="services-grid">
        {items.map((it)=> (
          <article key={it.title} className="card">
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
