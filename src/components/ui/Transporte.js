// Transporte.js
import React from "react";

const Transporte = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-cyan-600 mb-4">Transporte & Estaciones</h1>
          <p className="text-lg text-gray-600">
            Displays LED informativos y duraderos para entornos de tránsito de alto flujo como estaciones de tren, metro y terminales.
            Hemos incorporado una línea de pantallas smart atendiendo a brindar soluciones de bajo mantenimiento y alta durabilidad, para transporte y estaciones de servicio, que ofrecen información útil y atractiva para los usuarios mientras realizan sus actividades laborales o de esparcimiento. Estas pantallas de gestión autónoma ofrecen excelentes experiencias para clientes y usuarios finales.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/assets/aep.jpg" alt="Transporte" className="w-full h-96 object-cover" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-600">Información en Tiempo Real</h2>
            <p>
              Las soluciones de señalización digital permiten comunicar horarios, alertas y promociones, optimizando la experiencia del usuario.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Actualización en vivo de horarios y rutas</li>
              <li>Alta visibilidad en exteriores</li>
              <li>Resistencia a condiciones climáticas</li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="/assets/shell1.jpg" alt="Pantallas Transporte" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="/contacto" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-md transition">
            Solicitar Asesoría
          </a>
        </div>
      </div>
    </section>
  );
};

export default Transporte;
