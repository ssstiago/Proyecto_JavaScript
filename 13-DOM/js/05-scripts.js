//Query selector all - sintaxis css

const card = document.querySelectorAll('.card'); //Igual va a retornar el primero que encuentra
console.log(card);


const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

//si un elemento no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);