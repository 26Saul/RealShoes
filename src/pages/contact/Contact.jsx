import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-card">
        <section className="contact-main">
          <h1 className="contact-title">Contacto</h1>
          <p className="contact-subtitle">Díganos qué necesita.</p>

          {/* El formulario esta vinculado con Formspree  */}

          <form className="contact-form" action="https://formspree.io/f/mojnepdo" method="POST">
            <label className="contact-label">
              Nombre
              <input className="contact-input" type="text" name="nombre" required />
            </label>

            <label className="contact-label">
              Email
              <input className="contact-input" type="email" name="email" required />
            </label>

            <label className="contact-label">
              Mensaje
              <textarea className="contact-textarea" name="mensaje" rows="4" required />
            </label>

            <button className="contact-button" type="submit">
              Enviar
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </section>

        <aside className="contact-info">
          <h2 className="contact-info-title">Información de contacto</h2>
          <p className="contact-info-item">
            Email: <strong>info@realshoes.com</strong>
          </p>
          <p className="contact-info-item">
            Teléfono: <strong>+34 603 434 543</strong>
          </p>
          <p className="contact-info-item">
            Horario: Lunes a viernes, 9:00 - 18:00
          </p>
        </aside>
      </div>
    </main>
  );
}
