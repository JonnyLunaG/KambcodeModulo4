import React, { useEffect, useState } from 'react';
import CharacterCard from '../character/CharacterCard';
import Paginacion from '../../components/paginacion/Paginacion';
import './CharacterPage.css'; 
import Search from '../../components/search/Search';

const CharacterPage = () => {
  const [personajes, setPersonajes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [filtros, setFiltros] = useState({searchParam:'', gender:'', status:''});

  useEffect(() => {
    const fetchPersonajes = async () => {
      let url = `https://rickandmortyapi.com/api/character?page=${paginaActual}`;

      if(filtros.searchParam){
        url +=`&name=${filtros.searchParam}`;
      }
      if(filtros.gender){
        url +=`&gender=${filtros.gender}`;
      }
      if(filtros.status){
        url +=`&status=${filtros.status}`;
      }

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
  }, [paginaActual, filtros]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPaginas) {
      setPaginaActual(newPage);
    }
  };

  const handleSearch = (searchFilters) => {
    setFiltros(searchFilters);
    setPaginaActual(1); 
  };

  return (
    <div>
      <Search onSearch={handleSearch}/>
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
