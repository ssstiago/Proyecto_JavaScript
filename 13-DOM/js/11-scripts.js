
//Lo que puedo hacer con DOM 
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

//Agregar o quitar una funcionalidad que ya exista
function mostrarOcultarFooter() {
    //console.log('Diste click en el boton');
    if(footer.classList.contains('activo')) { //Verificar si el elemnento, tiene o NO tiene una clase
        footer.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
    console.log(footer.classList);
}