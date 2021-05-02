// Congelar un objeto - Métodos para congelar objetos

'use strict';

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze(producto);

/* Modificacion de las propiedades del objeto */
//producto.disponible = false;
//producto.imagen = 'imagen.jpg';
//delete producto.precio;

console.log(producto); 

/* 
    Para saber si nuestro objeto esta congelado o no: .siFrozen();
*/

console.log(Object.isFrozen(producto));