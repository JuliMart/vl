import React from "react";

const HDSeries = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Imagen del producto */}
        <img
          src="/assets/products/hd_series.jpg"
          alt="HD SERIES"
          className="rounded-lg shadow-2xl w-full h-auto"
        />

        {/* Contenido del producto */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold">HD SERIES</h2>
          <p className="text-lg text-gray-300">
            Diseñada con tecnología SRAM y PWM para mejorar la escala de grises, frecuencia de actualización y eficiencia energética.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-400 text-base">
            <li>Instalación y mantenimiento 100% front service</li>
            <li>Bajo nivel de ruido (sin coolers)</li>
            <li>Diseño Cable-Free con componentes integrados</li>
            <li>Ángulo de visión de 170°</li>
            <li>Diseño ultradelgado y liviano</li>
          </ul>

          {/* Botón para descargar ficha técnica */}
          <a
            href="/assets/products/VIEWLED_HD-SERIES_2024_V2.pdf"
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

export default HDSeries;
