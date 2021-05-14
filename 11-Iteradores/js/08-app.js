// Uso de for ( let ... in ...)

/*
    for of - itera sobre arreglos
    for in - itera sobre objetos
*/
const pendientes = ['Tarea', 'Comer', 'Proyeto', 'Estudiar JavaScript'];

for( let pendiente in pendientes ) {
    console.log(pendiente);
}

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`); //En este caso 'propiedad' funcional como un iterador [i]
}

for(let [llave, valor] of Object.entries(automovil) ) { //Ańadiduras de la ultima actualizacion de EC7
    console.log(valor);
    console.log(llave);
}