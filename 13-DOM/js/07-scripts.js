
// Cambiar el CSS de un elemento

//const encabezado = document.querySelector('h1');
//encabezado.style.backgroundColor = 'red';
//encabezado.style.fontFamily = 'Arial';
//encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('nueva-clase');
console.log(card.classList);