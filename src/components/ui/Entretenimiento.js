// Entretenimiento.js
import React from "react";

const Entretenimiento = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-cyan-600 mb-4">Entretenimiento</h1>
          <p className="text-lg text-gray-600">
            Pantallas LED de alto impacto para shows en vivo, escenarios, conciertos y producciones audiovisuales.
            Los avances en tecnología LED están revolucionando la industria del entretenimiento, desde eventos deportivos hasta conciertos y espectáculos en vivo. Nuestras pantallas ofrecen una experiencia visual cautivadora para el público. Ya sea mejorando la visualización de partidos deportivos o proporcionando un telón de fondo impresionante para conciertos, Viewled está a la vanguardia de esta transformación, elevando la calidad de todo tipo de eventos.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/assets/telonled.jpg" alt="Entretenimiento" className="w-full h-96 object-cover" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-600">Escenarios y Eventos</h2>
            <p>
              Nuestras pantallas modulares permiten configuraciones flexibles para adaptarse a cualquier producción o espectáculo en vivo.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Alta resolución y brillo adaptable</li>
              <li>Fácil montaje y transporte</li>
              <li>Software de control de show y contenido</li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="/assets/ent1.jpeg" alt="Pantallas Entretenimiento" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="/contacto" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-md transition">
            Solicitar Asesoría
          </a>
        </div>
      </div>
    </section>
  );
};

export default Entretenimiento;
