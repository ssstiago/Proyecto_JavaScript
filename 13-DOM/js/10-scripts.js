
//Generar HTML desde JavaScript
const enlace = document.createElement('A') //Creacion de etiquetas

//agregando texto
enlace.textContent = 'Nuevo enlace';

//ańadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target = '_blank' //--> Ańadir target
enlace.setAttribute('data-enlace', 'nuevo-enlace'); //Creacion de atributo
enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion;
function miFuncion() {
    alert('Diste click');
}

//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace);
navegacion.insertBefore(enlace, navegacion.children[1]);


//Creacion de CARD de forma dinamica
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('Categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
//console.log(imagen);
//imagen.classList.add('img-fluid');

//Crear el Card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

//insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
//contenedor.appendChild(card); //Se mostraria al final
contenedor.insertBefore(card, contenedor.children[0]);

console.log(card);