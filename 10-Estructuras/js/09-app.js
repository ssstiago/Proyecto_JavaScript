//Operador Ternario
const autenticado = true;
const puedePagar = false;

//A continuacion incluyendo validacion doble con Ternario
console.log(autenticado || puedePagar ? 'Si esta autenticado' : 'No esta autenticado'); 


const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if( efectivo > totalPagar || credito > totalPagar || disponible > totalPagar ) { //Se conoce como if anidado
    if( efectivo > totalPagar ) {
        console.log('Si, pagaste con efectivo');
    } else {
        console.log('Otra forma de pago');
    }
} else {
    console.log('Fondos Insuficientes');
}

//if anidado + operedor ternario
console.log( autenticado ? puedePagar ? 'Si esta autenticado y peude pagar' : 'Si autenticado, no puede pagar' : 'No esta autenticado' );
