import React from 'react';
import './Paginacion.css'; 

const Paginacion = ({ paginaActual, totalPaginas, onPageChange }) => {
  return (
    <div className="paginacion">
      <button
        onClick={() => onPageChange(paginaActual - 1)}
        disabled={paginaActual === 1}
      >Anterior</button>
      <span>Página {paginaActual} de {totalPaginas}</span>
      <button
        onClick={() => onPageChange(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}
      >Siguiente</button>
    </div>
  );
};

export default Paginacion;
