import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Prensa = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-extrabold text-cyan-400">Viewled en InfoComm</h2>

        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <img
            src="/assets/prensa/infocomm.jpeg"
            alt="Participación en InfoComm"
            className="w-300 h-300 h-auto object-cover"
          />

          <div className="p-6 space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              Durante nuestra visita a <strong>InfoComm 2024</strong>, exploramos las últimas innovaciones del sector audiovisual. ¡Una experiencia inspiradora que reafirma nuestro compromiso con la tecnología de vanguardia!
            </p>

            <a
              href="https://www.linkedin.com/posts/viewled_infocomm2024-lasvegas-tecnologaedaaudiovisual-activity-7207098517889118209-yFNF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFpvr_0BDGW93UKRW8OrM5fYDTsJOhYn8wY" // <-- reemplaza este link por el real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              <FaLinkedin className="text-2xl" />
              Ver post en LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prensa;
