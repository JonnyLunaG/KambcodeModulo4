
import './App.css'
import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard/RickAndMortyCharacterCard'


function App() {

  return(
    <div>
      <RickAndMortyCharacterCard id={1}/>
      <RickAndMortyCharacterCard id={2}/>
      <RickAndMortyCharacterCard id={3}/>
      <RickAndMortyCharacterCard id={4}/>
    </div>
    
  )
}

export default App
