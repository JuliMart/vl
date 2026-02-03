import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("navbar.services"), path: "/services" },
    { name: t("navbar.about"), path: "/nosotros" },
    { name: t("navbar.contact"), path: "/contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== "/"
        ? "bg-brand-dark/95 backdrop-blur-sm shadow-md py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
          da<span className="text-brand-accent">Code</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors tracking-wide uppercase"
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex gap-2 ml-4 border-l border-gray-700 pl-4">
            <button
              onClick={() => changeLanguage('es')}
              className={`text-sm font-medium transition-colors ${i18n.language === 'es' ? 'text-brand-accent' : 'text-brand-muted hover:text-white'}`}
            >
              ES
            </button>
            <span className="text-brand-muted">/</span>
            <button
              onClick={() => changeLanguage('en')}
              className={`text-sm font-medium transition-colors ${i18n.language === 'en' ? 'text-brand-accent' : 'text-brand-muted hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`absolute top-full left-0 w-full bg-brand-dark shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? "max-h-80" : "max-h-0"
          }`}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-brand-text hover:text-brand-accent text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Language Switcher */}
          <div className="flex gap-4 mt-4 pt-4 border-t border-gray-800 w-full justify-center">
            <button
              onClick={() => { changeLanguage('es'); setIsOpen(false); }}
              className={`text-lg font-medium ${i18n.language === 'es' ? 'text-brand-accent' : 'text-brand-muted'}`}
            >
              ESPAÑOL
            </button>
            <button
              onClick={() => { changeLanguage('en'); setIsOpen(false); }}
              className={`text-lg font-medium ${i18n.language === 'en' ? 'text-brand-accent' : 'text-brand-muted'}`}
            >
              ENGLISH
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
