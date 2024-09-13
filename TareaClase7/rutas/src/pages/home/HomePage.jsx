import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = (props) => {
  return (
    <div>
      <h1> Bienvenido a la pagina de rick and morty
      </h1>

      <h3> Enlaces rápidos </h3>
      
      <Link to="/characters">
        Ir a personajes
      </Link>
      <Link to="/episodes">
        Ir a episodios
      </Link>
    </div>
  );
}

export default HomePage