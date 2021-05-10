// Funciones de flecha ( Arrow Functions )

const aprendiendo1 = function() {
    console.log('Aprendiendo JavaScript, tradicional');
}

const aprendiendo2 = () => {
    console.log('Aprendiendo JavaScript, ArrowFuncion Teorica');
}


/*
    Cuando solo es una linea, tambien funciona de esta manera:
    const aprendiendo2 = () => console.log('Aprendiendo JavaScript');
*/

const aprendiendo3 = () => console.log('Aprendiendo JavaScript desde ArrowFunction (Habitual)'); 
const aprendiendo4 = () => 'Aprendiendo JavaScript desde ArrowFunction, con return en defoult';

aprendiendo1();
aprendiendo2();
aprendiendo3();
console.log(aprendiendo4()); //Sintaxis utilizada validando el return por defecto