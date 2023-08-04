import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="logo text-2xl font-bold">
          Vikingos
        </div>
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
        <div className="md:hidden">
          {/* Icono del menú para dispositivos móviles */}
          <svg className="w-6 h-6 fill-current text-white cursor-pointer" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>
      </div>
      {/* Menú desplegable para dispositivos móviles */}
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
    </nav>
  );
};

export default Navbar;
