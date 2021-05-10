const carrito = [];

// Ejemplo con ammazon (carrito de compras (objeto que tiene elementos))

const producto = {
    nombre: 'Monitor de 32 Pulgadas',
    precio: 400
}

const producto02 = {
    nombre: 'iPnone 12 Pro Max',
    precio: 1200
}

carrito.push(producto02);
carrito.push(producto);

const producto03 = {
    nombre: 'Teclado Mecanico',
    precio: 50
}
carrito.unshift(producto03); 

console.table(carrito);

//Eliminar ultimo elemento del carrito con .pop()
//carrito.pop();
//console.table(carrito);

//Eliminar inicio del elemento del carrito con .shift()
//carrito.shift();
//console.table(carrito);

//Eliminar partiendo de los elementos que seleccione con .splice()
carrito.splice(0, 1);
console.table(carrito);