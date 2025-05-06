import React from "react";

const XReal = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Imagen del producto */}
        <img
          src="/assets/products/xreal.jpg"
          alt="X-REAL SERIES"
          className="rounded-lg shadow-2xl w-full h-auto"
        />

        {/* Contenido del producto */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold">X-REAL SERIES</h2>
          <p className="text-lg text-gray-300">
            Diseñada especialmente para retail, esta serie ofrece tiempos de instalación mínimos y máxima calidad de imagen. Su estructura liviana, modular y con servicio frontal completo, permite una instalación rápida y precisa.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-400 text-base">
            <li>Relación de visualización 8:9 ideal para formatos widescreen</li>
            <li>Gabinete ultra liviano de solo 1,1 kg</li>
            <li>Montaje magnético con esquinas a 45° para empalmes perfectos</li>
            <li>Bajo consumo energético estabilizado</li>
            <li>Control remoto desde dispositivos móviles</li>
          </ul>

          {/* Botón para descargar ficha técnica */}
          <a
            href="/assets/products/VIEWLED_X-REAL-SERIES_2024.pdf"
            download
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-3 rounded-md transition duration-300"
          >
            Descargar Ficha Técnica
          </a>
        </div>
      </div>
    </section>
  );
};

export default XReal;
