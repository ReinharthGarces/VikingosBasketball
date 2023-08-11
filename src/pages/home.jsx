import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white p-4">
    {/* <div className="min-h-screen bg-[url('/VikingosLogo.png')] bg-center bg-opacity-75 text-white p-4"></div> */}
      <div className="max-w-7xl mx-auto">
        <h2 className="flex justify-center text-4xl font-bold mb-4 p-8">Vaaamos Vikingos!</h2>
        <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <section>
          <img
            src="melo1.jpg"
            alt="Imagen 1"/>
          <img
            src="melo2.jpg"
            alt="Imagen 2"/>
          <img
            src="melo3.jpg"
            alt="Imagen 3"/>
          <img
            src="melo4.jpg"
            alt="Imagen 3"/>
          <img
            src="melo5.jpg"
            alt="Imagen 3"/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
