import React, { useState } from 'react';
import './FormComponents.css';



function FormComponents(props) {
  
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    console.log(name, 'name');
    const handleSubmit = (e) =>{
      e.preventDefault();

      if(name === "" || password === "" ){
        setError(true)
      }else{
        setError(false)
        props.setUser([name])
      }
      
    }

    const handleChange = (e) =>{
      setName(e.target.value)
      console.log(e.target.value,'setname');
    }

  return (
    <section>
        <form action="" onSubmit={handleSubmit} className='form'>
            <h2>LOGIN USUARIO</h2>
            <input type="text" onChange={handleChange} value={name} placeholder='Nombre Usuario' />
            {error && <p className='error-message'>El campo nombre es requerido</p>}
            <input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder='Contraseña'/>
            {error && <p className='error-message'>El campo contrasena es requerido</p>}
            <button>Iniciar Sesion</button>
        </form>
    </section>
  )
  
}

export default FormComponents