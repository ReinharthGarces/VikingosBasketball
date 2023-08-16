import React from 'react';
import { useParams } from 'react-router-dom';
import { matches } from '../data/gamesData';
import { playersData } from '../data/playersData';

// Funciones para calcular promedios
function calcularPromedio(array) {
  const suma = array.reduce((total, valor) => total + valor, 0);
  return suma / array.length;
}

const PlayerStats = () => {
  const { id } = useParams();
  const player = playersData.find(player => player.id === parseInt(id));

  if (!player) {
    return <div>Jugador no encontrado</div>;
  }

  // Filtrar partidos en los que el jugador participó
  const partidosDelJugador = matches.filter(match =>
    match.teamAPoints.some((points, index) => index === player.id - 1) ||
    match.teamBPoints.some((points, index) => index === player.id - 1)
  );

  // Calcular promedios
  const promedioPuntos = calcularPromedio(partidosDelJugador.map(match => match.teamAPoints[player.id - 1]));
  const promedioRebotes = calcularPromedio(partidosDelJugador.map(match => match.teamAPoints[player.id - 1]));
  const promedioAsistencias = calcularPromedio(partidosDelJugador.map(match => match.teamAPoints[player.id - 1]));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">{player.name}</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              className="w-full h-70 object-cover object-center rounded-lg shadow-md"
              src={`/${player.imageUrl}`} 
              alt={player.name}
            />
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-gray-700 mb-2">Edad: {player.number}</p>
            <p className="text-gray-700 mb-2">Posición: {player.position}</p>
            <p className="text-gray-700 mb-2">Equipo: {player.city}</p>
            <p className="text-gray-700">Puntos totales: {player.totalPoints}</p>
            <p className="text-gray-700">Promedio de puntos: {promedioPuntos.toFixed(2)}</p>
            <p className="text-gray-700">Promedio de rebotes: {promedioRebotes.toFixed(2)}</p>
            <p className="text-gray-700">Promedio de asistencias: {promedioAsistencias.toFixed(2)}</p>
          </div>
        </div>
        {/* Aquí puedes agregar más secciones para las estadísticas del jugador */}
      </div>
    </div>
  );
};

export default PlayerStats;

