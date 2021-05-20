
//Eventos que suceden en el teclado
const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('Keydown', () => {
    console.log('Escribiendo...');
});

busqueda.addEventListener('blur', () => { //Cuando salgo
    console.log('Escribiendo...')
});

busqueda.addEventListener('copy', () => { //Al copiar elemento
    console.log('Has copiado el elemento...');
});

busqueda.addEventListener('paste', () => { //Al pegar elemento
    console.log('Has pegado el elemento seleccionado');
});

busqueda.addEventListener('cut', () => { //Al cortar elemento
    console.log('Has cortado el elemento...');
});

busqueda.addEventListener('input', () => { //Al cortar elemento
    console.log('Ejecutando el input');
});

busqueda.addEventListener('input', (e) => { //entrada de evento
    console.log(e);
});

busqueda.addEventListener('input', (e) => { //entrada de evento
    console.log(e.target);
});

busqueda.addEventListener('input', (e) => { //Saber lo que el usuario esta escribiendo
    console.log(e.target.value);
});