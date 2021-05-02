// Uso de metodo .seal()

'use strict';

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

/* 
    Metodo que permite sellar el objeto 
    Sin embargo permite modificacion, pero no deja ańadir nuevas ni eliminarlas.
*/

Object.seal(producto);

producto.disponible = false;

console.log(producto);

// Para saber si el objeto esta sellado
console.log(Object.isSealed(producto));