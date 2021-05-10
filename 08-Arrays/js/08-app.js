//Destructuring de Arrays

/*
    Destructurin en Objetos
*/    

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);
// console.log(producto);

// Extraccion del objeto
// const { nombre } = producto;
// const { precio } = producto;

// forma simplificada, menos linea de codigo
const { nombre } = producto;
console.log(nombre);


/*
    Destructuring en Arrys
*/

const numeros = [10, 20, 30, 40, 50];

//const [primero, segundo, tercero] = numeros; //Con creacion de indices anterores como primero, segundo... hasta acceder al elemento
//const [ , , , , quinto] = numeros; //Forma para acceder a solo el elemento del array deseado
const [primero, segundo, ...resto] = numeros; //Con spread operator para acceder al resto de elementos como se puede ver <--
console.log(resto);