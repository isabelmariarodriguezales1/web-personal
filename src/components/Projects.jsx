import React from 'react'

export default function Projects(){
  return (
    <section id="proyectos" className="projects container">
      <h2>Proyectos destacados</h2>
      <div className="projects-grid">
        <article className="project-card">
          <div className="project-media">
            <a href="https://cuantocuestacontratar.es/" target="_blank" rel="noopener noreferrer">
              <img src="/img/cuantocuestacontratar.png" alt="Miniatura cuantocuestacontratar — representación IA" loading="lazy" />
            </a>
          </div>
          <div className="project-body">
            <h3>cuantocuestacontratar.es</h3>
            <p>Proyecto personal publicado en Internet. Herramienta para estimar costes de contratación y presentar información relevante para la toma de decisiones. Proyecto desarrollado de forma independiente por Isabel María Rodríguez Alés.</p>
            <p className="muted">Tecnologías y detalles: ver el sitio o repositorios asociados para listar tecnologías verificadas. No se asumen detalles no verificados.</p>
            <a className="btn" href="https://cuantocuestacontratar.es/" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-media">
            <img src="/img/ai.png" alt="Miniatura TFG — representación de IA y datos" loading="lazy" />
          </div>
          <div className="project-body">
            <h3>Trabajo Fin de Grado — IA aplicada a RRHH</h3>
            <p>Desarrollé un prototipo académico que combina un chatbot de incorporación con un modelo predictivo para estimar la probabilidad de abandono de empleados. El trabajo abarcó diseño del flujo conversacional, recuperación de información para el chatbot y la construcción, entrenamiento y evaluación de modelos de clasificación.</p>
            <p>Tecnologías empleadas (documentadas en el proyecto): <strong>FastAPI</strong> para la API, <strong>React</strong> + <strong>Vite</strong> en la interfaz, <strong>Bootstrap</strong> para estilos, y herramientas de recuperación/IA como <strong>FAISS</strong> y <strong>LangChain</strong>. En la evaluación experimental, el modelo de clasificación obtuvo un ROC-AUC de 0,9413 en el conjunto de pruebas utilizado en el TFG.</p>
            <p className="muted">Proyecto académico realizado como parte del Grado. Código fuente y documentación técnica disponibles en el repositorio:</p>
            <a className="btn" href="https://github.com/isabelmariarodriguezales1/TrabajoFinDeGrado" target="_blank" rel="noopener noreferrer">Ver código en GitHub</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}
