const url ='https://randomuser.me/api/';
const boton = document.getElementById('enviar');
const imagen = document.getElementById('imagen');
const celular = document.getElementById('celular');
const email = document.getElementById('email');
const genero = document.getElementById('genero');
const nombre = document.getElementById('nombre');

const mostrarInfo = async () => {
    //console.log('entro aqui')
    const res = await fetch(url);
    const dato = await res.json();
    console.log(dato)
    const persona = dato.results[0];
    imagen.innerHTML = `<img src='${persona.picture.large}'>`;
    celular.innerHTML = `<b>Celular:</b> ${persona.cell}`;
    email.innerHTML = `<b>Email:</b> ${persona.email}`;
    genero.innerHTML = `<b>Genero:</b> ${persona.gender}`;
    nombre.innerHTML = `<b>Nombre:</b> ${persona.name.first} ${persona.name.last}`;
}

boton.addEventListener('click', mostrarInfo);

/*
const url = 'https://randomuser.me/api/';
const boton = document.getElementById('boton')
const contenido = document.querySelector('#contenido');

function mostrarData(){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data,'data');
            
            contenido.innerHTML = `<img src='${data.results[0].picture.large}'>
                                    <p>${data.results[0].name.first}</p>`
        })
}

// const mostrarData = async() =>{
//     const res = await fetch(url);
//     const data = await res.json();
//     contenido.innerHTML = `<img src='${data.results[0].picture.large}'>
//                             <p>${data.results[0].name.first}</p>`
// }

boton.addEventListener('click', mostrarData);
*/