//Manipulacion de arrays sin tocarlos directamente

/* 
    Ojo: Variable const puede ser modificada en arrays y objetos, en lo demas no es posible
*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
meses[0] = 'Nuevo Mes';
meses[7] = 'Ultimo mees';

console.table(meses);