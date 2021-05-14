//While loop

let a = 1; // iterador - inicializador while

while(a < 10) {
    console.log(`Numero ${a}`);
    a++;
} 

//Ejemplo con FizzBuzz
let i = 0;
while ( i < 100) {
    if( i % 3 === 0 && i % 5 === 0 ) {
        console.log(`${i}: FIZZ BUZZ!!`);
    } else if(i %3 === 0) {
        console.log(`${i}: fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i}: buzz`);
    } 
    i++;
}