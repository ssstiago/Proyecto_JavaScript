const producto = 'Monitor 20 pulgadas';

// .repeat te va a permitir repetir una cadena de texto ...
const texto = ' en Promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`);

// .split, dividir un string
const actividad = 'Estoy aprendiendo Java Scropt Moderno';
console.log(actividad.split(' '));

const hobbies = 'leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(' , '));

//Ejemplo con extraccion de twitter
const tweet = 'Apendiendo JavasScript #JSModerno';
console.log(tweet.split('#'));