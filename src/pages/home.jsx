import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex justify-center text-4xl font-bold mb-4 p-8">Bienvenido a la página oficial de Vikingos Basketball!</h2>
        <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <section>
          <img
            src="imagen1.jpg"
            alt="Imagen 1"/>
          <img
            src="imagen2.jpg"
            alt="Imagen 2"/>
          <img
            src="imagen3.jpg"
            alt="Imagen 3"/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
