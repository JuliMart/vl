import React from "react";
import { motion } from "framer-motion";
import { FaHistory, FaBullseye, FaEye } from "react-icons/fa";

const Nosotros = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Historia */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-8 rounded-xl shadow-xl"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
            <FaHistory className="text-4xl" /> Nuestra Historia
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Desde hace más de 17 años, <strong>Viewled</strong> ha liderado la transformación digital de espacios visuales en América Latina. Con una visión innovadora y compromiso por la excelencia, hemos desarrollado proyectos para las marcas más reconocidas de la región.
          </p>
        </motion.div>

        {/* Misión */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-8 rounded-xl shadow-xl"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
            <FaBullseye className="text-4xl" /> Nuestra Misión
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Brindar soluciones tecnológicas integrales en pantallas LED, LCD y sistemas de comunicación visual, enfocándonos en la personalización, innovación y soporte técnico de excelencia para nuestros clientes.
          </p>
        </motion.div>

        {/* Visión */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-8 rounded-xl shadow-xl"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
            <FaEye className="text-4xl" /> Nuestra Visión
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Ser la empresa líder en tecnología visual de Latinoamérica, reconocida por su innovación constante, adaptabilidad a medida y compromiso con la sustentabilidad y el diseño responsable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Nosotros;
