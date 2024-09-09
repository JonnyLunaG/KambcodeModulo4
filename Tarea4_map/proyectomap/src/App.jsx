import React, { useEffect, useState } from 'react'
import './App.css'
import CharacterCard from './CharacterCard/CharacterCard';

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const fetchPersonajes = async () => {
      const url = 'https://rickandmortyapi.com/api/character';

      try {
        const res = await fetch(url); 
        const datos = await res.json();
        const datosApi = datos.results;

        setPersonajes(datosApi)
        //console.log(datos, 'datooos');//borrar esta linea
      } catch (error) {
        console.error(error, 'este es un error que ocurre en el fetch')
      }
    }  
    fetchPersonajes();  
  }, [])
  
  return (
    <div>
      <h1 className='page-title'>Personajes de Rick and Morty</h1>
      <div className='container'>
      {
        personajes.map(personaje => (
          //console.log(personaje);
          <div className='card'>
            <CharacterCard
              nombre = {personaje.name} 
              image = {personaje.image}
              gender = {personaje.gender}
              status = {personaje.status}  
            />
          </div>
        ))
      }
    </div>
    </div>
    
  );
}

export default App
