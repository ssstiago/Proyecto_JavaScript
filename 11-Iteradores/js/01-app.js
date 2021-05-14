//Apertura de iteradores for loop

for (let i = 0; i <= 10; i++) {
    console.log(`Numero: ${i}`);
}

//Practica: Ejecucion de resultado pares
var esPar = () => {
    for(let i = 1; i<= 20; i++) {
        if(i %2 === 0){
            console.log(`Numero: ${i} es PAR`);
        }
    }   
}

esPar();

/*
    Ejemplo aplicado para carrito de compras
*/

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(`Lista ${i + 1}: ${carrito[i].nombre}`);
}