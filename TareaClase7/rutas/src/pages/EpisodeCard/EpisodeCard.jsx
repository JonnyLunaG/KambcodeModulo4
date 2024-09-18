import React from 'react'

const EpisodeCard = (props) => {

return (
    <div>
        <div className = "episodios">
            <h4>{props.nombre}</h4>
            <h4>{props.episodio}</h4>
            <h4>{props.creacion}</h4>
            
        </div>
    </div>
)
}

export default EpisodeCard