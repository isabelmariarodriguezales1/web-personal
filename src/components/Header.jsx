import React, { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Isabel María Rodríguez Alés</div>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto" className="cta">Cuéntame tu proyecto</a>
        </nav>
      </div>
    </header>
  )
}
