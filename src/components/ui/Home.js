import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{ backgroundImage: "url(/assets/viewhome.jpg)" }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">REALIDAD LED</h1>
          <p className="text-lg md:text-xl mb-6">
            Transformamos espacios con tecnología visual de vanguardia
          </p>
          <Link
            to="/soluciones"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Ver Soluciones
          </Link>
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">+17 AÑOS DE EXPERIENCIA</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">250+ Clientes Satisfechos</h3>
            <p className="text-gray-400">Confían en nuestra tecnología</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Presencia LATAM</h3>
            <p className="text-gray-400">Argentina, Chile, Perú, Uruguay</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Soporte Personalizado</h3>
            <p className="text-gray-400">Garantía escrita y asistencia continua</p>
          </div>
        </div>
      </section>

      {/* VERTICALES */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">Áreas de Aplicación</h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Retail",
            "Educación",
            "Entretenimiento",
            "Transporte",
            "Control y Sala de Reunión",
          ].map((item, i) => (
            <div key={i} className="bg-black border border-gray-700 rounded-lg p-4">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/soluciones"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            Ver todas las soluciones
          </Link>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Productos Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["X-WALL PLUS", "HD SERIES", "OLED TRANSPARENTE"].map((title, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={`/assets/products/home_${i + 1}.jpg`}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <Link
                  to="/equipamiento"
                  className="text-cyan-400 hover:underline"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA CONTACTO */}
      <section className="py-16 px-6 bg-green-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¡Listo para transformar tu espacio?
        </h2>
        <p className="mb-6">Solicitá una propuesta personalizada para tu proyecto</p>
        <Link
          to="/contacto"
          className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition"
        >
          Contactanos
        </Link>
      </section>
    </main>
  );
};

export default Home;
