import React, {useState} from 'react'

const EMAIL = 'isabelmariarodriguezales@gmail.com'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', type:'', message:''})

  const handleChange = (e)=> setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = (e)=>{
    e.preventDefault()
    const subject = encodeURIComponent(`Nuevo proyecto: ${form.type || 'Sin especificar'}`)
    const body = encodeURIComponent(`Nombre: ${form.name}\nCorreo: ${form.email}\n\n${form.message}`)
    // Use mailto to open user's mail client. For production, configure a serverless endpoint.
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="contact container">
      <h2>Contacto</h2>
      <p>Cuéntame brevemente qué tienes en mente. No necesitas saber los detalles técnicos: explícame qué quieres conseguir y qué problema necesitas resolver.</p>
      <form onSubmit={handleSubmit} className="contact-form" aria-label="Formulario de contacto">
        <label>
          Nombre
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Correo electrónico
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Tipo de proyecto
          <input name="type" value={form.type} onChange={handleChange} placeholder="Página web, app, integración..." />
        </label>
        <label>
          Describe tu proyecto
          <textarea name="message" rows="6" value={form.message} onChange={handleChange} required />
        </label>
        <div className="form-actions">
          <button type="submit" className="btn primary">Enviar por correo</button>
          <a className="muted" href={`mailto:${EMAIL}`}>O envíame un correo directamente</a>
        </div>
      </form>
      <p className="note muted">Nota: El formulario abre el cliente de correo del usuario. Para recibir mensajes directamente desde la web se puede configurar un endpoint serverless (ver README).</p>
    </section>
  )
}
