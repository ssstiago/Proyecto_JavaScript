// Operaciones con el array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);
console.table(meses[0]);
console.table(meses[1]);

// Cuanto mide el array
console.log(meses.length);


// Reccorrer elementos con iteradores (ej: un loop (for))
for(let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}