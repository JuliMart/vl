import React, { useState } from "react";

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
    // Aquí puedes integrar con una API o servicio de envío
  };

  return (
    <section className="bg-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Información de contacto */}
        <div>
          <h2 className="text-3xl font-bold text-cyan-700 mb-4">Contáctanos</h2>
          <p className="mb-4">¿Tienes una consulta? Estamos para ayudarte.</p>
          <p className="mb-2"><strong>Email:</strong> contacto@viewled.com.ar</p>
          <p className="mb-2"><strong>Teléfono:</strong> +54 9 221 4207919</p>
          <p className="mb-2"><strong>Ubicación:</strong> Bernardo de Irigoyen 722 3A - CABA - Buenos Aires, Argentina</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
