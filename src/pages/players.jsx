import React from 'react';
import { playersData } from '../data/playersData';
import { Link } from 'react-router-dom';

const PlayerDetails = ({ player }) => {
  return (
    <Link to={`/players/${player.id}`} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
      <img
        className="w-full h-70 object-cover object-center"
        src={player.imageUrl}
        alt={player.name}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{player.name}</h3>
        <p className="text-gray-700 mb-4">Posición: {player.position}</p>
        <p className="text-gray-700">Edad: {player.age}</p>
        <p className="text-gray-700">Equipo: {player.team}</p>
        {/* Agrega más detalles del jugador aquí, si es necesario */}
      </div>
    </Link>
  );
};

const Players = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white p-4">
      <h2 className="text-4xl font-bold mb-4">Información de los jugadores del equipo</h2>
      <div className="grid p-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {playersData.map((player) => (
          <PlayerDetails key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Players;
