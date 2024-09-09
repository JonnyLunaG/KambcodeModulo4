import React from 'react';
import './CharacterCard.css';

const CharacterCard = (props) => {
const statusClass = props.status.toLowerCase() === 'dead' ? 'dead' :
                    props.status.toLowerCase() === 'unknown' ? 'unknown' :
                    'alive';
  return (
    <div>
        <img src= {props.image} alt="" />
        <div className = {`text-container ${statusClass}`}>
            <h3>{props.nombre}</h3>
            <h4>{props.gender}</h4>
            <h4>{props.status}</h4>
        </div>
    </div>
  )
}

export default CharacterCard