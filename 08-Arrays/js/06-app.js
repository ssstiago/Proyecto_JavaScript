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

const producto03 = {
    nombre: 'Teclado Mecanico',
    precio: 50
}

let resultado;
//Como forma declarativa
resultado = [...carrito, producto];
resultado = [...resultado, producto02];
resultado = [...resultado, producto03];

console.table(resultado);