import React from 'react'
import Image from '../Image/Image'
import Title from '../Title/title'
import Details from '../descripcion/Details'

const Cards = (props) => {
  
  return (
    <div className ='card' >  
      <Image ruta={props.ruta}/> 
      <Title title={props.title}/>
      <Details genre={props.genre} status = {props.status}/>
    </div>
  )
}

export default Cards
