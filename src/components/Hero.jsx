import React from 'react'
import fotoUrl from '../../img/foto.JPG'

export default function Hero(){
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>Desarrollo web y soluciones digitales a medida</h1>
          <p>Soy ingeniera informática y ayudo a profesionales, emprendedores y empresas a convertir sus ideas en páginas web y herramientas digitales funcionales, modernas y adaptadas a sus necesidades.</p>
          <div className="hero-actions">
            <a href="#contacto" className="btn primary">Cuéntame tu proyecto</a>
            <a href="#proyectos" className="btn">Ver proyectos</a>
          </div>
        </div>
        <div className="hero-photo">
          <img src={fotoUrl} alt="Foto de Isabel María Rodríguez Alés" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
