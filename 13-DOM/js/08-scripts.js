
//Recorrer el DOM - Travesing in the DOM

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild); //Mi primer elemento dentro de la nevegacion
console.log(navegacion.lastElementChild); //Me trae el ultimo elemmento de la navegacion 

//console.log(navegacion.childNodes) //Los espacios en blanco son considerados como elementos
//console.log(navegacion.children) //Los espaciona en blanco son considerados elementos

//console.log(navegacion.children[1].nodeName);
//console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

//card.children[1].children[1].textContent = 'Nuevo Heading desde traversing the DOM '

//card.children[0].src = 'img/hacer3.jpg';
//console.log(card.children[0]); //Recordar que con children, se accede a lo hijos

//Travesing the 'hijo del padre'
//console.log(card.parentNode) //Los espacios en blanco son considerados como elementos
//console.log(card.parentElement.parentElement.parentElement);

console.log(card);
console.log(card.nextElementSibling); //Me selecciona los elementos cuando posee hermanos
console.log(card.nextElementSibling.nextElementSibling); //Me permite seleccionar el siguiente

const ultimoCard = document.querySelector('.card:nth-child(4)'); //Se selecciona el ultimo card
console.log(ultimoCard.previousElementSibling); //Regreso a un elemento (anterior)