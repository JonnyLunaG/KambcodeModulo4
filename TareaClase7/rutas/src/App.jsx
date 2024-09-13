import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CharacterPage from './pages/character/CharacterPage';
import EpisodesPage from './pages/episode/EpisodesPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/characters" element={<CharacterPage/>} />
          {/* La ruta de episodios es opcional, incluyela si la creaste en el paso 2*/}
          <Route path="/episodes" element={<EpisodesPage/>} />
          <Route element={<NotFoundPage/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
