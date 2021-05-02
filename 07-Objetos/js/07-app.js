
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

/*
   En objetos las propiedades puedesn cambiar en JavasScript, cuando esta por fuera de obejtos como tal, 
   estas variables permaneces constantes como en Java.
*/

producto.disponible = false;
delete producto.precio;
console.log(producto);