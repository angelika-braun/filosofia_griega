import { useState } from "react";

const Contacto = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div id="contacto" className="card article-box mt-5 p-4">
      <h2 className="mb-4">Contacto</h2>

      {!submitted ? (
        <form
          action="https://formspree.io/f/your-form-id" // <-- Hier deine Formspree-ID einfügen
          method="POST"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="asunto" className="form-label">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-glow">
            Enviar
          </button>
        </form>
      ) : (
        <p>¡Gracias por tu mensaje! Te responderemos pronto.</p>
      )}
    </div>
  );
};

export default Contacto;
