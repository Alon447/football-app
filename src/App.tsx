import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CreatePlayer from './components/CreatePlayer/CreatePlayer';
import FirstClub from './components/FirstClub/FirstClub';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-player" element={<CreatePlayer />}></Route>
        <Route path="/first-club" element={<FirstClub />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
