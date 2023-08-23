import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/home';
import Results from './pages/matches';
import Players from './pages/players';
import PlayerStats from './pages/playerStats';
import MatchDetails from './pages/MatchDetails';
import AddMatchForm from './pages/addMatchForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/:id" element={<MatchDetails />} />
        <Route path="/players" element={<Players />} />
        <Route path="/players/:id" element={<PlayerStats />} />
        <Route path="/addmatch" element={<AddMatchForm />} />
      </Routes>
    </Router>
  );
};

export default App;