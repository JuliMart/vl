import React from "react";

const Retail = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Encabezado */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-cyan-600 mb-4">Retail</h1>
          <p className="text-lg text-gray-600">
            Transformamos la experiencia de compra con tecnología LED de vanguardia diseñada para potenciar espacios comerciales.
            Desarrollar una experiencia de usuario excepcional emerge como un recurso esencial para atraer y retener clientes, generando así mayores ingresos.
            Las soluciones de Viewled ofrecen un contraste sobresaliente y una paleta de colores amplia, atrayendo audiencias específicas y mejorando la percepción de la marca. 
          </p>
        </div>

        {/* Imagen destacada */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/assets/retail.jpeg"
            alt="Aplicaciones Retail"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-600">Soluciones Personalizadas</h2>
            <p>
              Desde escaparates dinámicos hasta cartelería interior impactante, nuestras pantallas LED están diseñadas para captar la atención, mejorar la comunicación visual y elevar el valor de marca en entornos retail.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Totems interactivos para puntos de venta</li>
              <li>Videowalls modulares adaptables</li>
              <li>Contenido centralizado y gestionable</li>
              <li>Sistemas de señalética digital programable</li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/assets/retail2.jpeg"
              alt="Pantallas LED Retail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/contacto"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-md transition"
          >
            Solicitar Asesoría
          </a>
        </div>
      </div>
    </section>
  );
};

export default Retail;
