import React from 'react';

const Results = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Resultados de los últimos partidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            Partido 1
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            Partido 2
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            Partido 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;


