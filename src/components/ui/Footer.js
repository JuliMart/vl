import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-10 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Logo + Info */}
        <div className="flex items-center gap-6">
          <Link to="/">
            <img
              src="/assets/viewled-logoblanco.png"
              alt="Logo Viewled"
              className="w-32 h-32 object-contain"
            />
          </Link>
          <div className="text-sm leading-tight">
            <p className="font-bold text-white text-lg">Viewled Argentina</p>
            <p className="text-gray-400">
              Bernardo de Irigoyen 722 3A – CABA – Argentina
            </p>
          </div>
        </div>


        {/* Middle Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          {/* Servicio */}
          <div>
            <h3 className="font-bold text-white mb-2">SERVICIO</h3>
            <ul className="space-y-1">
              <li><span className="cursor-default">Branding</span></li>
              <li><span className="cursor-default">Diseño</span></li>
              <li><span className="cursor-default">Marketing</span></li>
              <li><span className="cursor-default">Publicidad</span></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold text-white mb-2">EMPRESA</h3>
            <ul className="space-y-1">
              <li><Link to="/nosotros" className="hover:text-cyan-400 transition">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-cyan-400 transition">Contacto</Link></li>
              <li><Link to="/prensa" className="hover:text-cyan-400 transition">Prensa</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-2">LEGAL</h3>
            <ul className="space-y-1">
              <li><span className="cursor-default">Términos de uso</span></li>
              <li><span className="cursor-default">Política de privacidad</span></li>
              <li><span className="cursor-default">Política de cookies</span></li>
            </ul>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="md:place-self-center md:justify-self-end mt-6 md:mt-0">
          <a
            href="https://www.linkedin.com/company/viewled"
            aria-label="LinkedIn"
            className="hover:text-cyan-400 transition inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
