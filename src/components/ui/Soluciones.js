import React from "react";

const Soluciones = () => {
  const soluciones = [
    {
      titulo: "Salas de Reunión & Control",
      descripcion:
        "Soluciones integradas con pantallas interactivas, videoconferencias, audio y control de IoT.",
      imagen: "/assets/soluciones/salas.jpg",
    },
    {
      titulo: "Comerciales & Retail",
      descripcion:
        "Pantallas LED para experiencias visuales impactantes que refuerzan la imagen de marca.",
      imagen: "/assets/soluciones/retail.jpg",
    },
    {
      titulo: "Residenciales & Educación",
      descripcion:
        "Soluciones que transforman el aprendizaje y el entretenimiento en el hogar con tecnología LED.",
      imagen: "/assets/soluciones/educacion.jpg",
    },
    {
      titulo: "Espectáculo & Entretenimiento",
      descripcion:
        "Pantallas para eventos en vivo, conciertos y deportes con calidad visual inmersiva.",
      imagen: "/assets/soluciones/entretenimiento.jpg",
    },
    {
      titulo: "Transporte & Estaciones",
      descripcion:
        "Displays inteligentes y duraderos para informar y conectar en estaciones y medios de transporte.",
      imagen: "/assets/soluciones/transporte.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-center text-black mb-10">
        Soluciones ViewLED
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {soluciones.map((sol, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soluciones;
