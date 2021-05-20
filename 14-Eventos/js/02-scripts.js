
//Eventos que ocurren con el mouse
const nav = document.querySelector('.navegacion');

//Registar un evento

nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'blue';
});

nav.addEventListener('mouseup', () => {
    console.log('Soltando el mouse');
})

//Eventos adicionales
/*
    mousedown - similar al click
    click
    dbclick = double click
    mouseup - cuando se suelta el mouse
*/