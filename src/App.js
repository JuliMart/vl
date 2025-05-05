import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import CreateUser from './components/ui/CreateUser';
import Login from './components/ui/Login'; 
import Footer from './components/ui/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import Nosotros from './components/ui/Nosotros';
import Contacto from './components/ui/Contacto';
import Soluciones from './components/ui/Soluciones';
import Equipamiento from './components/ui/Equipamiento';
import Home from './components/ui/Home';



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <div className="flex-1">
        <Routes>
          <Route path="/crear-usuario" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/equipamiento" element={<Equipamiento />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
