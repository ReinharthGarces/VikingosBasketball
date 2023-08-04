import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Bienvenido a la página principal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="imagen1.jpg"
            alt="Imagen 1"
            className="w-full h-full rounded-lg shadow-md object-cover"
          />
          <img
            src="imagen2.jpg"
            alt="Imagen 2"
            className="w-full h-full rounded-lg shadow-md object-cover"
          />
          <img
            src="imagen3.jpg"
            alt="Imagen 3"
            className="w-full h-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
