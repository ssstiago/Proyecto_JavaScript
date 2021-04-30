// Algunos concejos sobre el uso de booleanos

const autentification = true;

// if(autentification === true) { la idea es que se sustituya ya que esto es una forma redundante, que esta implicita
if(autentification) {
    console.log('Puedes ver Netflix');
} else {
    console.log('No puedes ver Netflix');
}


/* 
   Operador ternario
*/
console.log( autentification ? 'Si puede ver' : 'No puede');