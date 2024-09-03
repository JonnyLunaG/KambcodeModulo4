
import './App.css'
import Cards from './components/cards/cards'


//https://www.youtube.com/watch?v=kHUV9uN9rGw
//http://localhost:5173/

function App() {

  return (
    <div>
      <Cards  ruta ='/maria.png' title = 'María Paula' genre='Femenino' status = 'Estudiante Universitaria'/>
      <Cards  ruta ='/laura.png' title = 'Laura Angélica' genre='Femenino' status = 'Ingeniera Química'/>
      <Cards  ruta ='/leidy.png' title = 'Leidy Johanna' genre='Femenino' status = 'Estudiante Secundaria'/>
    </div>
  )
}

export default App
