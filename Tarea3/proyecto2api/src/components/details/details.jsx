import React from 'react';
import './details.css';

const Details = (props) => {
  return (
    <div>
      <p>
        <b>Genero: </b>{props.gender}
      </p>
      <p>
        <b>Estado: </b>{props.status}
      </p>
    </div>
  )
}

export default Details