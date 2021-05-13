//Buenas Practicas

const autenticado = true;

if(autenticado) {
    console.log('El esta autenticado');
}

const puntaje = 450;

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Excelente!!');
        return; // Recordar que return, es valido bajo las funciones
    } 
    if (puntaje > 300) {
        console.log('Buen puntaje ... felicidades');
        return;
    }
}

revisarPuntaje();