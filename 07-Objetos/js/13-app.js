
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

/*

    Object.Keys --> Se utiliza para retornar la parte izquierda del objecto.
    ej: ['nombre', 'precio', 'disponible']

    Object.Values --> Se utiliza para retornar la parte derecha del objecto.
    ej: ['Monitor 20 pulgadas', 300, true]

    Object.entries --> Se utiliza para retornar ambas parte del objeto en pares.
    ej: ['nombre', Monitor 20 pulgadas'], ['precio',300], ['disponoble', true]

*/

console.log(Object.keys(producto));
console.log(Object.values(producto));
console.log(Object.entries(producto));