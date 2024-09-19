import React from 'react'
import { useEffect, useState } from 'react';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import Paginacion from '../../components/paginacion/Paginacion';
import './EpisodePage.css'; 


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);
  
    useEffect(() => {
      const fetchEpisodes = async () => {
        const url = 'https://rickandmortyapi.com/api/episode/?page=' + paginaActual;
  
        try {
          const res = await fetch(url);
          const datos = await res.json();
          const datosApi = datos.results;
          console.log(datosApi, " este es la data");
          console.log(datosApi.length, " estas son las paginas");

          setEpisodes(datosApi);
          setTotalPaginas(datosApi.length);
        } catch (error) {
          console.error('Error fetching episodes:', error);
        }
      };
  
      fetchEpisodes();
    }, [paginaActual]);
  
    const handlePageChange = (newPage) => {
      if (newPage > 0 && newPage <= totalPaginas) {
        setPaginaActual(newPage);
      }
    };
  
    return (
      <div>
        <div className='container'>
          {episodes.map((episodio) => (
            <div className='card' key={episodio.id}>
              <EpisodeCard
                nombre={episodio.name}
                creacion={episodio.created}
                episodio={episodio.episode}
             
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
}

export default EpisodesPage