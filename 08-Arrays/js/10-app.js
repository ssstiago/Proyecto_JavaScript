//Metodo .map

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

//Sintaxis con .map()
carrito.map( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )

//forEach cuenta como una funcion
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )

/*
    DIFERENCIAS ENTRA .map() VS .forEach()
    .map() crea un arreglo nuevo, es decir, llena una variable con arreglo nuevo
    mientras que .forEach() no es asi.
*/