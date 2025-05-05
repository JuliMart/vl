import React, { useState } from "react";
import BackgroundVideo from "./BackgroundVideo";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🎥 Video background */}
      <BackgroundVideo/>

      {/* 🧾 Formulario centrado */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Iniciar Sesión
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition"
            >
              Iniciar Sesión
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-700">
            ¿No tienes cuenta?{" "}
            <a
              href="/crear-usuario"
              className="text-cyan-700 font-semibold hover:underline"
            >
              Crear cuenta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
