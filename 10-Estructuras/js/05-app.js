//Uso de Switch

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aun no has seleccionado un metodo de pago o metodo de pago no soportado');
        break;
}

function pagar() {
    console.log('Pagando...');
}