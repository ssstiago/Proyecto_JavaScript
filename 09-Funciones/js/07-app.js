
//Comunicacion de funciones

iniciarApp();
function iniciarApp() {
    console.log('Iniciando app...');

    segundaFunction();
}


function segundaFunction() {
    console.log('Desde las segunda funcion');

    usuarioAutenticado('Juan');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario ... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario} `);
}