//Do while

let a = 1;
do {
    console.log(`Numero ${a}`);
    a++; //Incremento
} while( a < 10); //Condicion


//Ejemplo de fizzBuzz aplicando do-While
let i = 0;
do {
    if( i % 3 === 0 && i % 5 === 0 ) {
        console.log(`${i}: FIZZ BUZZ!!`);
    } else if(i %3 === 0) {
        console.log(`${i}: fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i}: buzz`);
    } 
    i++;
} while ( i < 100);