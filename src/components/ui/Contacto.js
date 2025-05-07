import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí puedes integrar una API como EmailJS o Formspree
  };

  return (
    <section className="bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Información de contacto */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-cyan-600 mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600">
            ¿Tienes una consulta o querés cotizar un proyecto? Estamos para ayudarte.
          </p>

          <div className="space-y-4 text-gray-700 text-base">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-600" />
              <span><strong>Email:</strong> contacto@viewled.com.ar</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-600" />
              <span><strong>Teléfono:</strong> +54 9 221 4207919</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-600" />
              <span>
                <strong>Ubicación:</strong> Bernardo de Irigoyen 722 3A, CABA - Buenos Aires, Argentina
              </span>
            </div>
          </div>

          <a
            href="https://www.google.com/maps?q=Bernardo+de+Irigoyen+722,+Buenos+Aires,+Argentina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-md transition"
          >
            Ver en Google Maps
          </a>
        </div>

        {/* Formulario de contacto */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-xl shadow-xl space-y-4"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-md transition font-semibold"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
