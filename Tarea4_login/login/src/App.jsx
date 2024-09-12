import { useState } from 'react'
import './App.css'
import FormComponents from './components/formLogin/formComponents'
import Home from './components/home/Home';

function App() {
  const [user, setUser] = useState([]);

  return (
    <div>
      {
        !user.length > 0
        ? <FormComponents setUser={setUser}/>
        : <Home user={user} setUser={setUser}/>

      }
    </div>
  )
}

export default App
