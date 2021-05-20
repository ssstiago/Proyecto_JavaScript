
//Eventos que susceden en un formulario
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

//Declaracion de funcion
function validarFormulario(e) {
    e.preventDefault(); //Prevenir la accion como ejemplo: Que abra un enlace
    console.log('Consultar una API');
    console.log(e.target.action);
}