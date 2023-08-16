import React from 'react';
import { useParams } from 'react-router-dom';
import { matches } from '../data/gamesData';

const MatchDetails = () => {
  const { id } = useParams();
  const match = matches.find(match => match.id === parseInt(id));

  if (!match) {
    return <div>Partido no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Detalle del partido</h2>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">
            {match.teamA} vs {match.teamB}
          </h3>
          <p className="text-gray-600 mb-1">{match.date}</p>
          <div className="grid grid-cols-4 gap-2 mt-4">
            {match.teamAPoints.map((pointsA, index) => (
              <div key={index} className="text-center">
                <p className="font-bold text-2xl p-2">{index + 1}º cuarto</p>
                <p className="font-semibold">{pointsA}</p>
                <p className="font-semibold p-2">{match.teamBPoints[index]}</p>
              </div>
            ))}
          </div>
          <hr className="my-2" />
          <p className="font-bold text-xl">
            {match.teamA} : {match.teamAPoints.reduce((total, points) => total + points, 0)} puntos
          </p>
          <p className="font-bold text-xl">
            {match.teamB} : {match.teamBPoints.reduce((total, points) => total + points, 0)} puntos
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;

