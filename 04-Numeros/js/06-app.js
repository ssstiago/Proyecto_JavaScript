const numero1 = '20';
const numero2 = '20.4';
const numero3 = 'Uno';
const numero4 = 20;

console.log(Number.parseInt(numero1)); // Convertir de string hacia numero entero
console.log(Number.parseFloat(numero2)); // Convertir de sgtring a numero float

// Revisar si un número entero o no
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));