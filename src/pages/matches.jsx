import React from 'react';
import { matches } from '../data/gamesData'; 
import { Link } from 'react-router-dom';

const MatchResult = ({ match }) => {
  const totalPointsA = match.teamAPoints.reduce((total, points) => total + points, 0);
  const totalPointsB = match.teamBPoints.reduce((total, points) => total + points, 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
      <Link to={`/results/${match.id}`} className="block mb-2 text-xl font-semibold text-center">
      {match.teamA} vs {match.teamB}
      <p className="text-gray-600 mb-1">{match.date}</p>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {match.teamAPoints.map((pointsA, index) => (
          <div key={index} className=" text-center">
            <p className="font-bold text-2xl p-2">{index + 1}º </p>
            <p className="font-semibold">{pointsA}</p>
            <p className="font-semibold p-2">{match.teamBPoints[index]}</p>
          </div>
        ))}
      </div>
      <hr className="my-2" />
      <p className="font-bold text-xl text-center">{match.teamA} : {totalPointsA} puntos</p>
      <p className="font-bold text-xl text-center">{match.teamB} : {totalPointsB} puntos</p>
      </Link>
    </div>
  );
};

const Results = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-bold mb-4">Resultados de los últimos partidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {matches.map((match) => (
            <MatchResult key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;




