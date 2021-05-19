//Modificacion en el HTML

const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);


//console.log(encabezado.innerText);  //Se trae solo el texto
//console.log(encabezado.textContent); //Se trae tambine el texto - Encontrará visibility: hidden; valido bajo formato css
//console.log(encabezado.innerHTML); // Se trae contenido con HTML

/*
    Modificar contenido - Titulo h1
*/
//const nuevoHeading = 'Nuevo Heading';
//document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';