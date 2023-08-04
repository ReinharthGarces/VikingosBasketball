import React from 'react';
import { playersData } from '../data/playersData';

const Players = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-red-500 text-white p-4">
      <h2 className="text-4xl font-bold mb-4">Información de los jugadores del equipo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {playersData.map((player) => (
          <div key={player.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-40 object-cover object-center"
              src={player.imageUrl}
              alt={player.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{player.name}</h3>
              <p className="text-gray-600 mb-4">Posición: {player.position}</p>
              <p className="text-gray-600">Edad: {player.age}</p>
              <p className="text-gray-600">Equipo: {player.team}</p>
              {/* Agrega más detalles del jugador aquí, si es necesario */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
