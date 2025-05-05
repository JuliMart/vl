import React, { useState } from "react";
import BackgroundVideo from "./BackgroundVideo";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creando usuario:", formData);
  };

  return (
<div className="relative w-full min-h-[calc(100vh-0px)] overflow-hidden"> 
<BackgroundVideo />

<div className="relative z-20 flex items-center justify-center min-h-screen px-4">
  <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Crear Usuario
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="password"
              name="confirmar"
              placeholder="Confirmar contraseña"
              value={formData.confirmar}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition"
            >
              Crear Cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
