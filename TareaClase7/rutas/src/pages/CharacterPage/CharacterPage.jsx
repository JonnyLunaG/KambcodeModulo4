import React, { useEffect, useState } from 'react';
import CharacterCard from '../character/CharacterCard';
import Paginacion from '../../components/paginacion/Paginacion';
import './CharacterPage.css'; 

const CharacterPage = () => {
  const [personajes, setPersonajes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const fetchPersonajes = async () => {
      const url = 'https://rickandmortyapi.com/api/character?page=' + paginaActual;

      try {
        const res = await fetch(url);
        const datos = await res.json();
        const datosApi = datos.results;

        setPersonajes(datosApi);
        setTotalPaginas(datos.info.pages);
      } catch (error) {
        console.error('Error fetching personajes:', error);
      }
    };

    fetchPersonajes();
  }, [paginaActual]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPaginas) {
      setPaginaActual(newPage);
    }
  };

  return (
    <div>
      <div className='container'>
        {personajes.map((personaje) => (
          <div className='card' key={personaje.id}>
            <CharacterCard
              nombre={personaje.name}
              image={personaje.image}
              gender={personaje.gender}
              status={personaje.status}
            />
          </div>
        ))}
      </div>
      <Paginacion
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CharacterPage;
