//Sentencia else if

const dinero = 100;
const totalPagar = 500;
const tarjeta = true;
const cheque = false;

if(dinero >= totalPagar) {
    console.log('Se puede pagar');
} else if(cheque) {
    console.log('Si, tengo una Cheque');
} else if(tarjeta) {
    console.log('Valido para pagar con tarjeta');
} else {
    console.log('Fondos insuficientes');
}