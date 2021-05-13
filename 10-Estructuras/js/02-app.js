// Formas de comparacion

const puntaje = 1000;
const puntaje02 = '1000';

// typeof me da como resultado el origen del dato
console.log(typeof puntaje);  
console.log(typeof puntaje02);

if(puntaje === 1000) { //Operador de caracter estricto
    console.log('Si es igual');
} else {
    console.log('No es igual');
}

//Declaracion de diferencia
if(puntaje !== 5000) {
    console.log('Si, es diferente');
} else {
    console.log('No es igual');
}