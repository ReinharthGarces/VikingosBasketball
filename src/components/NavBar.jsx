import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importa los íconos de react-icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
        <img src="VikingosLogo.png" alt="Logo Vikingos" className="w-36 h-auto"></img>
        </div>
        <div className="logo text-4xl font-semibold w-36 p-4">
          Vikingos
        </div>
        {/* Barra de navegación para dispositivos de escritorio */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/results"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Resultados
            </Link>
          </li>
          <li>
            <Link
              to="/players"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Jugadores
            </Link>
          </li>
        </ul>
        {/* Menú desplegable para dispositivos móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Menú desplegable para dispositivos móviles */}
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute top-16 right-4 bg-white py-2 px-4 rounded-lg shadow-md">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition duration-300 block"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/results"
              className="text-gray-600 hover:text-gray-900 transition duration-300 block"
            >
              Resultados
            </Link>
          </li>
          <li>
            <Link
              to="/players"
              className="text-gray-600 hover:text-gray-900 transition duration-300 block"
            >
              Jugadores
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
