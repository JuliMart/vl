// Salas.js
import React from "react";

const Salas = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-cyan-600 mb-4">Salas de Reunión & Control</h1>
          <p className="text-lg text-gray-600">
            Soluciones tecnológicas avanzadas para entornos corporativos y de monitoreo, con pantallas interactivas y conectividad IoT.
            Las soluciones de Viewled están cambiando la forma en que aprendemos y disfrutamos del entretenimiento en casa. Con su vibrante reproducción de colores, alta luminosidad y facilidad de uso, estas pantallas ofrecen una experiencia visual excepcional. Desde mejorar la enseñanza hasta ofrecer una experiencia de cine inmersiva en casa, nos destacamos por nuestra tecnología de avanzada y nuestro compromiso con la sostenibilidad.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/assets/corp.jpg" alt="Salas de Reunión" className="w-full h-96 object-cover" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-600">Ambientes Conectados</h2>
            <p>
              Creamos espacios colaborativos con pantallas interactivas, videoconferencia y control centralizado de dispositivos y datos.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Display táctil de gran formato</li>
              <li>Videowall para monitoreo</li>
              <li>Gestión remota e inteligente</li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="/assets/salacontrol.avif" alt="Pantallas Sala" className="w-full h-full object-cover" />
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

export default Salas;
