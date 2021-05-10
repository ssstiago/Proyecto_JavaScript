
// ArrowFunctions en un .forEach() y en .map()

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

// Sintaxis con .map() => con arrowFunction
const nuevoArreglo = carrito.map( (producto) => `${producto.nombre} - Precio: ${producto.precio}`); //Parentesis es opcional

// Sintaxis con .forEach() => con arrowFunction
carrito.forEach( (producto) => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArreglo);