/**
 * Loops:
 * 
 * for
 * while
 * do-while
 * 
 * for-of
 * for-in
 * forEach
 * 
 */
/**
 * print "hello World!" 20 times
 */

console.log(`\n\nfor-loop\n\m`);

for (let counter = 1; counter <= 20; counter++) {
    console.log('Hello World!');
}
/**
 * 1. creater counter - variable with initial value
 * 2. check if condition is true
 * 3. if true, enter the for-loop and execute code; if false termenet the for-loop and go further
 * 4. once all for-loop code is executed, increment the counter-value
 * 5. check if condition is true
 * 6. if true, enter the for loop
 * 7. etc.
 */

const sport = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

console.log(sport);

for (let counter = 1; counter <= sport.length -1; counter++) {
    console.log(sport[counter]);
}

let theWord = 'shells from seychelles island beach ';
let arrayTheWord = theWord.split(" ");
let abbrivWord = '';

for (let i = 0; i <= arrayTheWord.length -1; i++) {
    abbrivWord += arrayTheWord[i].substring(0, 1).toUpperCase();
}
   
 console.log(`\nAbbreviation for the sentence '${theWord}' is: ${abbrivWord}`);

 console.log(`\nprinting in reverse\n`); 
for (let i = sport.length -1; i >= 0; i--){
    console.log(sport[i]);
}

/**
 * Initialization
 * while (condition) {
 *      while-loop
 *      code block
 *      code will keep executing until the condition is true
 *      increment/decrement
 * }
 */

console.log(`\nUsing wile-loop\n`);

let W = 0;
while (W <= sport.length-1) {
    console.log(sport[W]);
    W++
}

/**
 * do-while loop
 * 
 * initialization
 * do {
 *      do-wile loop
 *      code block
 *      code will keep executing until the condition is true
 *      increment/decrement
 * 
 * } while (condition);
 * 
 * 
 */

 console.log(`\nUsing do-wile loop\n`);

 let d = 0;
 do {
    console.log(sport[d]);
    d++
 } while (d <= sport.length-1);