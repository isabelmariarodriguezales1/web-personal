import React from 'react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {year} Isabel María Rodríguez Alés</div>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </footer>
  )
}
