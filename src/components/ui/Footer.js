import React from "react";
import {FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-10 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Info */}
        <div className="flex items-center gap-4">
        <Link to='/'>
        <img    
            src="/assets/viewled-logoblanco.png"
            alt="Logo Viewled"
            className="w-48 h-48 object-contain"
            />
            </Link>
          <div>
            <p className="font-bold">Viewled Argentina</p>
            <p>Bernardo de Irigoyen 722 3A - CABA - Argentina</p>
          </div>
        </div>
         {/* Middle Sections */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-white mb-2">SERVICIO</h3>
            <ul className="space-y-1">
              <li><a href="#">Branding</a></li>
              <li><a href="#">Diseño</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Publicidad</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">EMPRESA</h3>
            <ul className="space-y-1">
                <li>
                <Link to="/nosotros" className="hover:text-cyan-400 transition">
                    Nosotros
                </Link>
                </li>
                <li>
                <Link to="/contacto" className="hover:text-cyan-400 transition">
                    Contacto
                </Link>
                </li>
                <li><a href="#">Trabajos</a></li>
                <li><a href="#">Prensa</a></li>
            </ul>
            </div>

          <div>
            <h3 className="font-bold text-white mb-2">LEGAL</h3>
            <ul className="space-y-1">
              <li><a href="#">Términos de uso</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Política de cookies</a></li>
            </ul>
          </div>
        </div>
        {/* Redes Sociales */}
        <nav className="flex gap-4 md:place-self-center md:justify-self-end text-white text-xl">
          
                    <a   
            href="https://www.linkedin.com/company/viewled" 
            aria-label="Linkedin" 
            className="hover:text-cyan-400 transition"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaLinkedin className="text-5xl" />
            </a>
          
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
