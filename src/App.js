import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import Home from './components/ui/Home';
import Services from './components/ui/Services';
import Nosotros from './components/ui/Nosotros';
import Contacto from './components/ui/Contacto';
import Login from './components/ui/Login';
import CreateUser from './components/ui/CreateUser';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark text-brand-text font-sans">
      <Navbar />
      <ScrollToTop />
      <div className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crear-usuario" element={<CreateUser />} />
          {/* Fallback for anything else */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
