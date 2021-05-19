// Seleccion por Selector

/*
    Permite seleccionar la misma sintaxis sea desde class o por id
*/

const card = document.querySelector('.card'); //Igual va a retornar el primero que encuentra
console.log(card);

//Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium.info');

//Seleccionar sengundo card de hospedaje 
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2'); //Desde queryselctor cuando hayan varias clases
console.log(segundoCard);

//Seleccionar el formula
const formulario = document.querySelector('#formulario');
console.log(formulario);

//Seleccionar elementps HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);