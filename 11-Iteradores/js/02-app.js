//Uso de palabras: break y continue

/*
    break: se usa para cortar la ejecucion de un for_loop
    continue: permite identificsr el elemento y continuar con la ejecucion
*/

for (let i = 0; i <= 10; i++) {
    if(i === 5) {
        console.log('CINCO');
        continue; //rompe la linea y no ejecuta mas la linea
        //break; //este rompe el ciclo - No ejecuta mas el iterador[i]
    } 
    console.log('Numero: ${i}');
}

//Ejemplo; Con objeto + arrays con el uso de continue

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200, descuento: true },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre)
}