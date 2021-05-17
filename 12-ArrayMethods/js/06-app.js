// Aplicacion de .every

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every( prodcuto => prodcuto.precio < 500) ; //Revisa que se cumpla toda la condicion, como si fuera &&
console.log(resultado);

const resultado2 = carrito.some( prodcuto => prodcuto.precio < 500 ); //Revisa que se cumpla al menos una, como si fuera un ||
console.log(resultado2);