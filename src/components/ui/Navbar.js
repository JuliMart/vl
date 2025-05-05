import React, { useState, useRef, useEffect } from "react";
import {
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);
  const userMenuRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-black text-white shadow-md relative z-50">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 min-h-[100px]">
{/* Izquierda: Logo */}
        <div className="flex items-center gap-2">
          <div className="block md:hidden">
            <button className="text-2xl" onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <Link to="/">
            <img src="/assets/view-logo.jpg" alt="Logo ViewLED"     className="w-40 md:w-64 cursor-pointer"/>
          </Link>
        </div>

        {/* Centro: Navegación */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link to="/nosotros" className="hover:text-cyan-400 transition">
            NOSOTROS
          </Link>
          <Link to="/soluciones" className="hover:text-cyan-400 transition">
            SOLUCIONES
          </Link>
          <Link to="/equipamiento" className="hover:text-cyan-400 transition">
            EQUIPAMIENTO
          </Link>
          <Link to="/contacto" className="hover:text-cyan-400 transition">
            CONTACTO
          </Link>
          {/* Puedes agregar más enlaces aquí si quieres */}
        </div>
        {/* Derecha: iconos */}
        <div className="flex items-center gap-4 text-xl md:text-2xl relative">
          {/*<FaRegCommentDots className="cursor-pointer hover:text-cyan-400" title="Contacto" />*/}
          {/*<FaQuestionCircle className="cursor-pointer hover:text-cyan-400" title="Ayuda" />*/}
          {/* Menú perfil */}
          <div className="relative" ref={userMenuRef}>
            <FaUserCircle
              className="cursor-pointer hover:text-cyan-400"
              title="Perfil"
              onClick={() => setShowUserMenu(true)}
            />

            {showUserMenu && (
              <div
                className="absolute top-10 right-2 z-50 w-[90vw] max-w-md bg-white text-black shadow-xl rounded-lg p-6 flex flex-col md:flex-row border border-gray-300"
              >
                {/* Botón cerrar solo en móvil */}
                <button
                  className="absolute top-2 right-2 text-black text-xl md:hidden"
                  onClick={() => setShowUserMenu(false)}
                >
                  ✖
                </button>

                {/* Clientes nuevos */}
                <div className="md:w-1/2 md:border-r md:pr-4 mb-4 md:mb-0">
                  <h3 className="font-bold mb-2">Clientes nuevos</h3>
                  <p className="text-sm">¿Eres nuevo en ViewLED? Crea una cuenta para comenzar.</p>
                  <Link
                    to="/crear-usuario"
                    className="text-cyan-700 text-sm mt-2 inline-block hover:underline"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Crear cuenta
                  </Link>
                </div>

                {/* Usuarios registrados */}
                <div className="md:w-1/2 md:pl-4">
                  <h3 className="font-bold mb-2">Usuarios registrados</h3>
                  <p className="text-sm">¿Ya tienes una cuenta?</p>
                  <Link
                    to="/login"
                    className="text-cyan-700 text-sm mt-2 inline-block hover:underline"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Iniciar sesión
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menú móvil lateral */}
      <div
        ref={menuRef}
        className={`absolute top-full left-0 md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-[80%] max-w-xs bg-black text-white px-6 py-4 space-y-2 text-sm font-semibold rounded-br-xl shadow-lg">
          <a href="#seccion1" className="block hover:text-cyan-400" onClick={closeMenu}>Sección 1</a>
          <a href="#seccion2" className="block hover:text-cyan-400" onClick={closeMenu}>Sección 2</a>
          <a href="#seccion3" className="block hover:text-cyan-400" onClick={closeMenu}>Sección 3</a>
          <a href="#contacto" className="block hover:text-cyan-400" onClick={closeMenu}>Contacto</a>
          <button
            className="w-full bg-white text-black px-3 py-1 rounded hover:bg-cyan-400 hover:text-white"
            onClick={closeMenu}
          >
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
