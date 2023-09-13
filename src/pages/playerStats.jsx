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
  const playerId = parseInt(id);
  const player = playersData.find(player => player.id === playerId);
 

  if (!player) {
    return <div>Jugador no encontrado</div>;
  }

  // Filtrar partidos en los que el jugador participó
  const partidosDelJugador = matches.filter(match =>
    match.teamAPlayers[playerId - 1]?.minutes > 0
  );
  
  console.log(partidosDelJugador);
  
  // Calcular promedios
  const promedioMinutes = calcularPromedio(partidosDelJugador.map(match => match.teamAPlayers[playerId - 1]?.minutes));
  const promedioPuntos = calcularPromedio(partidosDelJugador.map(match => match.teamAPlayers[playerId - 1]?.points));
  const promedioTlPct = calcularPromedio(partidosDelJugador.map(match => match.teamAPlayers[playerId - 1]?.tlp));
  const promedioT2Pct = calcularPromedio(partidosDelJugador.map(match => match.teamAPlayers[playerId - 1]?.t2p));
  const promedioT3Pct = calcularPromedio(partidosDelJugador.map(match => match.teamAPlayers[playerId - 1]?.t3p));
  const promedioRebotes = calcularPromedio(partidosDelJugador.map(match => match.teamAPlayers[playerId - 1]?.reb));
  const promedioAsistencias = calcularPromedio(partidosDelJugador.map(match => match.teamAPlayers[playerId - 1]?.ast));
  const promedioRobos = calcularPromedio(partidosDelJugador.map(match => match.teamAPlayers[playerId - 1]?.stl));
  const promedioBloqueos = calcularPromedio(partidosDelJugador.map(match => match.teamAPlayers[playerId - 1]?.blk));
  const promedioValoracion = calcularPromedio(partidosDelJugador.map(match => match.teamAPlayers[playerId - 1]?.val));

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
            <p className="text-gray-700">Pts totales: {player.totalPoints}</p>
            <p className="text-gray-700">Minutos p/p: {promedioMinutes.toFixed(2)}</p>
            <p className="text-gray-700">Puntos p/p: {promedioPuntos.toFixed(2)}</p>
            <p className="text-gray-700">Tiros libres %: {promedioTlPct.toFixed(2)}</p>
            <p className="text-gray-700">Cestas 2pts %: {promedioT2Pct.toFixed(2)}</p>
            <p className="text-gray-700">Cestas 3pts %: {promedioT3Pct.toFixed(2)}</p>
            <p className="text-gray-700">Rebotes p/p: {promedioRebotes.toFixed(2)}</p>
            <p className="text-gray-700">Asistencias p/p: {promedioAsistencias.toFixed(2)}</p>
            <p className="text-gray-700">Robos p/p: {promedioRobos.toFixed(2)}</p>
            <p className="text-gray-700">Bloqueos p/p: {promedioBloqueos.toFixed(2)}</p>
            <p className="text-gray-700">Valoracion del jugador: {promedioValoracion.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;

