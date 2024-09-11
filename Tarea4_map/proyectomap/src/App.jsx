import React, { useEffect, useState } from 'react'
import './App.css'
import CharacterCard from './CharacterCard/CharacterCard';
import Paginacion from './paginacion/Paginacion';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1); 
  const [totalPaginas, setTotalPaginas] = useState(1); 

  useEffect(() => {
    const fetchPersonajes = async () => {
      const url = 'https://rickandmortyapi.com/api/character';

      try {
        const res = await fetch(url); 
        const datos = await res.json();
        const datosApi = datos.results;

        setPersonajes(datosApi);
        //console.log(datosApi.length);
        setTotalPaginas(datosApi.length);
        
      } catch (error) {
        console.error(error, 'este es un error que ocurre en el fetch')
      }
    }  
    fetchPersonajes(paginaActual);  
  }, [paginaActual]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPaginas) {
      setPaginaActual(newPage);
    }
  };
  
  return (
    <div>
      <h1 className='page-title'>Personajes de Rick and Morty</h1>
      <div className='container'>
      {
        personajes.map(personaje => (
          //console.log(personaje);
          <div className='card' key={personaje.id}>
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
      <Paginacion
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        onPageChange={handlePageChange}
      />
    </div>
    
  );
}

export default App
