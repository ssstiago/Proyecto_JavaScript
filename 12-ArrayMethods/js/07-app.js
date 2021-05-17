//Operaciones con arreglos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];


//Esta se utiliza con .concat
const months = meses.concat(meses2, meses3, 'Otro mes'); //Es valiado bajo estacondicion como asignacion al nuevo arreglo
console.log(months);

//Esta se utiliza con spread operator
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);