import React from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaMapMarkedAlt,
  FaHeadset,
  FaStore,
  FaUniversity,
  FaFilm,
  FaBus,
  FaChalkboardTeacher
} from "react-icons/fa";
import ProductosDestacados from "../products/ProductosDestacados";

const areas = [
    { icon: <FaStore size={32} />, label: "Retail", path: "/retail" },
    { icon: <FaUniversity size={32} />, label: "Educación", path: "/educacion" },
    { icon: <FaFilm size={32} />, label: "Entretenimiento", path: "/entretenimiento" },
    { icon: <FaBus size={32} />, label: "Transporte", path: "/transporte" },
    { icon: <FaChalkboardTeacher size={32} />, label: "Control", path: "/salas" },
  ];
  

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
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-extrabold">+17 AÑOS DE EXPERIENCIA</h2>
          <div className="grid md:grid-cols-3 gap-12 px-6">
            <div className="flex flex-col items-center space-y-4">
              <FaUsers className="text-cyan-400 text-5xl" />
              <h3 className="text-xl font-semibold">250+ Clientes Satisfechos</h3>
              <p className="text-gray-400">Confían en nuestra tecnología</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <FaMapMarkedAlt className="text-cyan-400 text-5xl" />
              <h3 className="text-xl font-semibold">Presencia LATAM</h3>
              <p className="text-gray-400">Argentina, Chile, Perú, Uruguay</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <FaHeadset className="text-cyan-400 text-5xl" />
              <h3 className="text-xl font-semibold">Soporte Personalizado</h3>
              <p className="text-gray-400">Garantía escrita y asistencia continua</p>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS DE APLICACION */}
      <section className="bg-[#0e1625] py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Áreas de Aplicación</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-6">
            {areas.map((area, idx) => (
            <Link
                key={idx}
                to={area.path}
                className="bg-black rounded-lg py-6 px-4 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform hover:text-cyan-400"
            >
                {area.icon}
                <span className="mt-4 font-semibold text-lg">{area.label}</span>
            </Link>
            ))}
        </div>
        </section>


      {/* PRODUCTOS DESTACADOS */}
      <ProductosDestacados/>


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
