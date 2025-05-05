import React from "react";

const XWallPlus = () => {
  return (
    <section className="bg-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Imagen del producto */}
        <img 
          src="/assets/products/X-WALL-PLUS-LED-DISPLAY.jpg" 
          alt="X-WALL PLUS" 
          className="rounded-lg shadow-2xl w-full h-auto"
        />

        {/* Contenido del producto */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold">X-WALL PLUS</h2>
          <p className="text-lg text-gray-300">
            Sistema profesional todo en uno para salas, recintos u hogares que requieren imagen de máxima resolución con audio integrado y alto brillo.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-400 text-base">
            <li>Reproducción HDMI, AirPlay, Miracast</li>
            <li>Modos conferencia y presentación</li>
            <li>Control remoto o desde móvil</li>
            <li>Android 9.0 integrado</li>
            <li>Brillo adaptable y conectividad WiFi/Bluetooth</li>
            <li>Menú operativo por control remoto</li>
            <li>APPs propietarias desarrolladas por Viewled</li>
            <li>Puerto Tipo C + interfaz HDMI 2.0 compatible con 4K</li>
          </ul>

          {/* Botón para descargar ficha técnica */}
          <a
            href="/assets/products/VIEWLED_X-WALL-PLUS-LED-DISPLAY.pdf"
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

export default XWallPlus;
