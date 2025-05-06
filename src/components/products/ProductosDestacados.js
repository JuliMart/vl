import React from "react";
import { Link } from "react-router-dom";

const productos = [
  {
    title: "X-WALL PLUS",
    image: "/assets/products/X-WALL-PLUS-LED-DISPLAY.jpg",
    link: "/equipamiento#xwall",
  },
  {
    title: "HD SERIES",
    image: "/assets/products/hd_series.jpg",
    link: "/equipamiento#hdseries",
  },
  {
    title: "X-REAL SERIES",
    image: "/assets/products/xreal.jpg",
    link: "/equipamiento#xreal",
  },
];

const ProductosDestacados = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Productos Destacados</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productos.map((producto, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <img
              src={producto.image}
              alt={producto.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{producto.title}</h3>
              <Link to={producto.link} className="text-cyan-400 hover:underline">
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosDestacados;
