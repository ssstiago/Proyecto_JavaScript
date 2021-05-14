//Enfoque en Js

/*
    forEach ideal para el recorrido de arreglos (por cada)
*/

const pendientes = ['Tarea', 'Comer', 'Proyeto', 'Estudiar JavaScript'];
pendientes.forEach( (pendiente) => {
    console.log(pendiente);
} )

/*
    Si solamente es una sola linea en el codigo, se puede apreciar de la siguiente manera:
            pendientes.forEach( (pendiente) => console.log(pendiente) );
*/    

pendientes.forEach( (pendiente, indice) => console.log(`${indice} : ${pendiente}`) ); //Una forma similar a la concatenacion

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

const nuevoArray01 = carrito.forEach( producto => producto.nombre); //Solo realiza el recorrido
const nuevoArray02 = carrito.map( producto => producto.precio); //Partiendo de que .map me crea un nuevo array

console.log(nuevoArray01);
console.log(nuevoArray02);