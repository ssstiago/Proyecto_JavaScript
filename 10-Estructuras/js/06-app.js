//Operadores &&

const usuario = false;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log('Si puedes pagar');
} else if (!usuario) {
    console.log('Inicia sesion o crear una cuenta');
} else if (!puedePagar) {
    console.log('Fondos Insuficientes');
} else {
    console.log('No puedes comprar');
}