
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Agregar nuevos valores al objeto
producto.imagen = 'imagen.jpg';

// Eliminar imagen del objeto
delete producto.disponible;

console.log(producto);