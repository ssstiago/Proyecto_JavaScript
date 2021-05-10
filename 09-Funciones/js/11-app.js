// Parametros y Argumentos desde un ArrowFuntion

const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('JavaScript', 'Node.js');

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2} en ArrowFunction`;
console.log(aprendiendo2('JavaScript', 'Node.js'));

/*
    Cuadno haya uno o mas argumentos a ingresar, es necesario perentesis dentro de los arrowFunctions. 
*/