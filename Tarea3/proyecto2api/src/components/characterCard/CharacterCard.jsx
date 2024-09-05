import React from 'react';
import Title from '../title/title';
import Image from '../image/image';
import Details from '../details/details';


function CharacterCard(props) {

  return (
    <div className ='card'>
      <Image image={props.image} />
      <Title name={props.name}  />
      <Details 
        gender={props.gender} 
        status={props.status} 
      />
    </div>
  );
}

export default CharacterCard;