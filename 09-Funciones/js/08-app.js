//Funciones que retornan valores

function sumar(a, b) {
    return a + b; //Esto me retorna un valor
}

const resoult = sumar(2,3); // Debe de almacenarse de nuevo en una variable, para que contenga el 'return' de la funcion
console.log(resoult);       // Se imprime el vaolor que contiene la variable 'resoult'

// Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio) { 
    return total += precio; 
}

function calcularImpuesto(total) { 
    return total * 1.15; 
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar}`);
console.log(total);