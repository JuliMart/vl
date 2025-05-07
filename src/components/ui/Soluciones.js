// Soluciones.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Soluciones = () => {
  const soluciones = [
    {
      titulo: "Comerciales & Retail",
      descripcion: "Pantallas LED para experiencias visuales impactantes que refuerzan la imagen de marca.",
      imagen: "/assets/vit.jpeg",
      ruta: "/retail",
    },
    {
      titulo: "Residenciales & Educación",
      descripcion: "Soluciones que transforman el aprendizaje con tecnología LED.",
      imagen: "/assets/soluciones/educacion.jpg",
      ruta: "/educacion",
    },
    {
      titulo: "Espectáculo & Entretenimiento",
      descripcion: "Pantallas para eventos en vivo, conciertos y deportes con calidad visual inmersiva.",
      imagen: "/assets/ent2.jpeg",
      ruta: "/entretenimiento",
    },
    {
      titulo: "Transporte & Estaciones",
      descripcion: "Displays inteligentes y duraderos para informar y conectar en estaciones y medios de transporte.",
      imagen: "/assets/soluciones/transporte.jpg",
      ruta: "/transporte",
    },
    {
      titulo: "Salas de Reunión & Control",
      descripcion: "Soluciones integradas con pantallas interactivas, videoconferencias, audio y control de IoT.",
      imagen: "/assets/soluciones/salas.jpg",
      ruta: "/salas",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100 py-12 px-6 md:px-20"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-center text-black mb-10"
      >
        Soluciones ViewLED
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {soluciones.map((sol, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              to={sol.ruta}
              className="hover:shadow-xl transition rounded-xl overflow-hidden bg-white shadow-md"
            >
              <img
                src={sol.imagen}
                alt={sol.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-black">{sol.titulo}</h2>
                <p className="text-gray-700 text-sm">{sol.descripcion}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Soluciones;
