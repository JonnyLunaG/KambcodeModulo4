import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import EpisodesPage from './pages/episode/EpisodesPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import NavBar from './components/navBar/NavBar';
import HomePage from './pages/home/HomePage';
import Header from './components/Header/Header';
import './App.css';


function App() {
  return (
    <Router>
      <div className='app'>
        <Header/>
        <NavBar />
        <main className='content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharacterPage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
