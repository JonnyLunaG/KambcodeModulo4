import React from 'react'

function Home(props) {
   
    const handleLogOut = () =>{
        props.setUser([])
    }
  
    return (
    <div>
        <h1>BIENVENIDO</h1>
        <h2>{props.user}</h2>
        <button onClick={handleLogOut}>Cerrar sesion</button>
    </div>
  )
}

export default Home