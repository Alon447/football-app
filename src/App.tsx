import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreatePlayer from './components/CreatePlayer';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-player" element={<CreatePlayer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
