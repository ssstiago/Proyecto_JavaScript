/*
    Creacion de objetos partiendo de object_Constructor();
*/

// Object Literal

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} dolares`);
    }
}

// Object Constructor --> Como suele hacerse en Java
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 58 pulgadas', 1400);
console.log(producto2);

const producto3 = new Producto('ipad Pro', 1250);
console.log(producto3);