
import React, { useState, useEffect } from 'react';
import './App.css'
import CharacterCard from './components/characterCard/CharacterCard';

function App() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const rickAndMortyCharacterId = 3;
  
  useEffect( () => {
    
    const url = "https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId;
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        setName(data.name);
        setImage(data.image);
        setGender(data.gender);
        setStatus(data.status);
    }).catch((error)=>{
      console.error('errorrrrr', error);
    });
  }, []);  
  

  return (
    <div>
      <CharacterCard
        name ={name}
        image={image}
        gender={gender}
        status={status}
      />
    </div>
  )
}

export default App
