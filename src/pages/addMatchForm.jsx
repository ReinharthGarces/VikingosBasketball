import React, { useState } from 'react';
import { matches } from '../data/gamesData';
import { playersData } from '../data/playersData';

const AddMatchForm = () => {
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [date, setDate] = useState('');
  const [teamAPlayers, setTeamAPlayers] = useState(playersData.map(player =>
     ({ ...player, minutes: 0, points: 0 })));


  const handleSubmit = (event) => {
    event.preventDefault();

    const newMatch = {
      id: matches.length + 1,
      teamA,
      teamB,
      date,
      teamAPlayers,
      // Agrega más propiedades según tus necesidades
    };

    matches.push(newMatch);

// Limpia los campos después de enviar el formulario
    setTeamA('');
    setTeamB('');
    setDate('');
    setTeamAPlayers([]);

    alert('Partido agregado con éxito');
  };

  const handlePlayerStatChange = (playerId, statName, value) => {
    const updatedPlayers = [...teamAPlayers];
    const playerIndex = updatedPlayers.findIndex(player => player.id === playerId);
    if (playerIndex !== -1) {
      updatedPlayers[playerIndex][statName] = value;
      setTeamAPlayers(updatedPlayers);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Agregar nuevo partido</h2>
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="teamA">Equipo A</label>
              <input type="text" id="teamA" value={teamA} onChange={(e) => setTeamA(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="teamB">Equipo B</label>
              <input type="text" id="teamB" value={teamB} onChange={(e) => setTeamB(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date">Fecha</label>
              <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-400 my-4">
              <thead>
                <tr>
                  <th className="border border-gray-400 p-2">Jugador</th>
                  <th className="border border-gray-400 p-2">MIN</th>
                  <th className="border border-gray-400 p-2">PTS</th>
                  <th className="border border-gray-400 p-2">TL</th>
                  <th className="border border-gray-400 p-2">%TL</th>
                  <th className="border border-gray-400 p-2">T2</th>
                  <th className="border border-gray-400 p-2">%T2</th>
                  <th className="border border-gray-400 p-2">T3</th>
                  <th className="border border-gray-400 p-2">%T3</th>
                  <th className="border border-gray-400 p-2">REB</th>
                  <th className="border border-gray-400 p-2">RO</th>
                  <th className="border border-gray-400 p-2">RD</th>
                  <th className="border border-gray-400 p-2">AST</th>
                  <th className="border border-gray-400 p-2">PD</th>
                  <th className="border border-gray-400 p-2">RB</th>
                  <th className="border border-gray-400 p-2">TAP</th>
                  <th className="border border-gray-400 p-2">FP</th>
                  <th className="border border-gray-400 p-2">+/-</th>
                  <th className="border border-gray-400 p-2">VAL</th>
                </tr>
              </thead>
              <tbody>
                {teamAPlayers.map((player) => (
                  <tr key={player.id}>
                    <td className="border border-gray-400 p-2">{player.name}</td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.minutes || ''} onChange={(e) => handlePlayerStatChange(player.id, 'minutes', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.points || ''} onChange={(e) => handlePlayerStatChange(player.id, 'points', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.tl || ''} onChange={(e) => handlePlayerStatChange(player.id, 'tl', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.tlp || ''} onChange={(e) => handlePlayerStatChange(player.id, 'tlp', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.t2 || ''} onChange={(e) => handlePlayerStatChange(player.id, 't2', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.t2p || ''} onChange={(e) => handlePlayerStatChange(player.id, 't2p', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.t3 || ''} onChange={(e) => handlePlayerStatChange(player.id, 't3', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.t3p || ''} onChange={(e) => handlePlayerStatChange(player.id, 't3p', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.reb || ''} onChange={(e) => handlePlayerStatChange(player.id, 'reb', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.ro || ''} onChange={(e) => handlePlayerStatChange(player.id, 'ro', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.rd || ''} onChange={(e) => handlePlayerStatChange(player.id, 'rd', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.ast || ''} onChange={(e) => handlePlayerStatChange(player.id, 'ast', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.pd || ''} onChange={(e) => handlePlayerStatChange(player.id, 'pd', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.rb || ''} onChange={(e) => handlePlayerStatChange(player.id, 'rb', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.tap || ''} onChange={(e) => handlePlayerStatChange(player.id, 'tap', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.fp || ''} onChange={(e) => handlePlayerStatChange(player.id, 'fp', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player['+/-'] || ''} onChange={(e) => handlePlayerStatChange(player.id, '+/-', e.target.value)}/>
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="number" value={player.val || ''} onChange={(e) => handlePlayerStatChange(player.id, 'val', e.target.value)}/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Agregar partido
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMatchForm;




// import React, { useState } from 'react';
// import { matches } from '../data/gamesData';

// const AddMatchForm = () => {
//   const [teamA, setTeamA] = useState('');
//   const [teamB, setTeamB] = useState('');
//   const [date, setDate] = useState('');
//   const [teamAPoints, setTeamAPoints] = useState(0);
//   const [teamBPoints, setTeamBPoints] = useState(0);
//   const [teamAMinutsPlayed, setTeamAMinutsPlayed] = useState(0);
//   const [teamAPts, setTeamAPts] = useState(0);
//   const [teamAFreeThrowsMade, setTeamAFreeThrowsMade] = useState(0);
//   const [teamAFreeThrowsPercentage, setTeamAFreeThrowsPercentage] = useState(0);
//   const [teamAFieldGoalsMade, setTeamAFieldGoalsMade] = useState(0);
//   const [teamAFieldGoalsPercentage, setTeamAFieldGoalsPercentage] = useState(0);
//   const [teamAThreePointersMade, setTeamAThreePointersMade] = useState(0);
//   const [teamAThreePointersPercentage, setTeamAThreePointersPercentage] = useState(0);
//   const [teamARebounds, setTeamARebounds] = useState(0);
//   const [teamAOffensiveRebounds, setTeamAOffensiveRebounds] = useState(0);
//   const [teamADefensiveRebounds, setTeamADefensiveRebounds] = useState(0);
//   const [teamAAssists, setTeamAAssists] = useState(0);
//   const [teamALosses, setTeamALosses] = useState(0);
//   const [teamASteals, setTeamASteals] = useState(0);
//   const [teamABlocks, setTeamABlocks] = useState(0);
//   const [teamAPersonalFouls, setTeamAPersonalFouls] = useState(0);
//   const [teamAPlusMinus, setTeamAPlusMinus] = useState(0);
//   const [teamAValuation, setTeamAValuation] = useState(0);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newMatch = {
//       id: matches.length + 1,
//       teamA,
//       teamB,
//       date,
//       teamAPoints,
//       teamBPoints,
//       teamAMinutsPlayed,
//       teamAPts,
//       teamAFreeThrowsMade,
//       teamAFreeThrowsPercentage,
//       teamAFieldGoalsMade,
//       teamAFieldGoalsPercentage,
//       teamAThreePointersMade,
//       teamAThreePointersPercentage,
//       teamARebounds,
//       teamAOffensiveRebounds,
//       teamADefensiveRebounds,
//       teamAAssists,
//       teamALosses,
//       teamASteals,
//       teamABlocks,
//       teamAPersonalFouls,
//       teamAPlusMinus,
//       teamAValuation,
//       // Set other fields for team B as needed
//     };

//     matches.push(newMatch);

//     // Clear form fields after submission
//     setTeamA('');
//     setTeamB('');
//     setDate('');
//     setTeamAPoints(0);
//     setTeamBPoints(0);
//     setTeamAMinutsPlayed(0);
//     setTeamAPts(0);
//     setTeamAFreeThrowsMade(0);
//     setTeamAFreeThrowsPercentage(0);
//     setTeamAFieldGoalsMade(0);
//     setTeamAFieldGoalsPercentage(0);
//     setTeamAThreePointersMade(0);
//     setTeamAThreePointersPercentage(0);
//     setTeamARebounds(0);
//     setTeamAOffensiveRebounds(0);
//     setTeamADefensiveRebounds(0);
//     setTeamAAssists(0);
//     setTeamALosses(0);
//     setTeamASteals(0);
//     setTeamABlocks(0);
//     setTeamAPersonalFouls(0);
//     setTeamAPlusMinus(0);
//     setTeamAValuation(0);

//     alert('Partido agregado con éxito');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold mb-4">Agregar nuevo partido</h2>
//         <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <div className="flex flex-col">
//               <label htmlFor="teamA">Equipo A</label>
//               <input type="text" id="teamA" value={teamA} onChange={(e) => setTeamA(e.target.value)} />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamB">Equipo B</label>
//               <input type="text" id="teamB" value={teamB} onChange={(e) => setTeamB(e.target.value)} />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="date">Fecha</label>
//               <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAPoints">Puntos equipo A</label>
//               <input type="number" id="teamAPoints" value={teamAPoints} onChange={(e) => setTeamAPoints(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAMinutsPlayed">MIN</label>
//               <input type="number" id="MIN" value={teamAMinutsPlayed} onChange={(e) => setTeamAMinutsPlayed(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAPts">PTS</label>
//               <input type="number" id="PTS" value={teamAPts} onChange={(e) => setTeamAPts(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAFreeThrowsMade">TL</label>
//               <input type="number" id="TL" value={teamAFreeThrowsMade} onChange={(e) => setTeamAFreeThrowsMade(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAFreeThrowsPercentage">%TL</label>
//               <input type="number" id="%TL" value={teamAFreeThrowsPercentage} onChange={(e) => setTeamAFreeThrowsPercentage(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAFieldGoalsMade">T2</label>
//               <input type="number" id="T2" value={teamAFieldGoalsMade} onChange={(e) => setTeamAFieldGoalsMade(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAFieldGoalsPercentage">%T2</label>
//               <input type="number" id="%T2" value={teamAFieldGoalsPercentage} onChange={(e) => setTeamAFieldGoalsPercentage(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAThreePointersMade">T3</label>
//               <input type="number" id="T3" value={teamAThreePointersMade} onChange={(e) => setTeamAThreePointersMade(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAThreePointersPercentage">%T3</label>
//               <input type="number" id="%T3" value={teamAThreePointersPercentage} onChange={(e) => setTeamAThreePointersPercentage(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamARebounds">REB</label>
//               <input type="number" id="REB" value={teamARebounds} onChange={(e) => setTeamARebounds(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAOffensiveRebounds">RO</label>
//               <input type="number" id="RO" value={teamAOffensiveRebounds} onChange={(e) => setTeamAOffensiveRebounds(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamADefensiveRebounds">RD</label>
//               <input type="number" id="RD" value={teamADefensiveRebounds} onChange={(e) => setTeamADefensiveRebounds(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAAssists">AST</label>
//               <input type="number" id="AST" value={teamAAssists} onChange={(e) => setTeamAAssists(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamALosses">PD</label>
//               <input type="number" id="PD" value={teamALosses} onChange={(e) => setTeamALosses(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamASteals">RB</label>
//               <input type="number" id="RB" value={teamASteals} onChange={(e) => setTeamASteals(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamABlocks">TAP</label>
//               <input type="number" id="TAP" value={teamABlocks} onChange={(e) => setTeamABlocks(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAPersonalFouls">FP</label>
//               <input type="number" id="FP" value={teamAPersonalFouls} onChange={(e) => setTeamAPersonalFouls(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAPlusMinus">+/-</label>
//               <input type="number" id="+/-" value={teamAPlusMinus} onChange={(e) => setTeamAPlusMinus(parseInt(e.target.value))}/>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="teamAValuation">VAL</label>
//               <input type="number" id="VAL" value={teamAValuation} onChange={(e) => setTeamAValuation(parseInt(e.target.value))}/>
//             </div>
//           </div>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//             Agregar partido
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddMatchForm;


