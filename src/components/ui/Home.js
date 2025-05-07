// Home.js
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
  FaChalkboardTeacher,
} from "react-icons/fa";
import ProductosDestacados from "../products/ProductosDestacados";
import { motion } from "framer-motion";

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
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{ backgroundImage: "url(/assets/viewhome.jpg)" }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            REALIDAD LED
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl mb-6"
          >
            Transformamos espacios con tecnología visual de vanguardia
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/soluciones"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Ver Soluciones
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CONFIANZA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-black text-white py-20"
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-extrabold">+17 AÑOS DE EXPERIENCIA</h2>
          <div className="grid md:grid-cols-3 gap-12 px-6">
            {[FaUsers, FaMapMarkedAlt, FaHeadset].map((Icon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-4"
              >
                <Icon className="text-cyan-400 text-5xl" />
                <h3 className="text-xl font-semibold">
                  {idx === 0 && "250+ Clientes Satisfechos"}
                  {idx === 1 && "Presencia LATAM"}
                  {idx === 2 && "Soporte Personalizado"}
                </h3>
                <p className="text-gray-400">
                  {idx === 0 && "Confían en nuestra tecnología"}
                  {idx === 1 && "Argentina, Chile, Perú, Uruguay"}
                  {idx === 2 && "Garantía escrita y asistencia continua"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* AREAS DE APLICACION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#0e1625] py-16 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Áreas de Aplicación</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-6">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={area.path}
                className="bg-black rounded-lg py-6 px-4 flex flex-col items-center justify-center shadow-lg hover:text-cyan-400"
              >
                {area.icon}
                <span className="mt-4 font-semibold text-lg">{area.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PRODUCTOS DESTACADOS */}
      <ProductosDestacados />

      {/* CTA CONTACTO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-6 bg-green-900 text-white text-center"
      >
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
      </motion.section>
    </main>
  );
};

export default Home;
