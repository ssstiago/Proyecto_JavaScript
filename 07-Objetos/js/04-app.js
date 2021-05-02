
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);
// console.log(producto);

// Extraccion del objeto
//const { nombre } = producto;
// const { precio } = producto;

// forma simplificada, menos linea de codigo
const { nombre, precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);