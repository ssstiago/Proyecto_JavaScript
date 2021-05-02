// Uso de la palabra this.
/*
    Similar a como se suele hacer en Java, como POO.
*/

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} dolares`);
    }
}

const producto2 = {
    nombre: 'iPad',
    precio: 500,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} dolares`);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();