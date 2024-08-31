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
mostrarInfo();
boton.addEventListener('click', mostrarInfo);
