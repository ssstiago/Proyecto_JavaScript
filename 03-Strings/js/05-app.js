const producto = 'Monitor 20 Pulgadas';
console.log(producto);

// . replace para reemplazar
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// .slice para cortar -- Permite cortar partiendo del ingreso de caracteres a cortar
console.log(producto.slice(0 , 10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

// Alternativa a slice
console.log(producto.substring(0,10));

// Alternativa a slice con substring
/*
La principal diferencia radica en que substring trata de intercambiar las posciiones, en caso de que
la posicion inicial sea mayor a la posicion final, este metodo, lo que hace es que actua para que se 
ejecute con éxito.
*/

console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

let usuario = 'Juan';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0)); //Cortar posicion similar a lo aprendido en Java.