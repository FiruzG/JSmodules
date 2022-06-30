/**
 * 
 * Arithmetic (+, -, *, /, %, ++, --)
 * 
 * % - Modulus
 * ++ -- Increment
 * -- - Decrement
 */

/**
 * Post - increment --- executes always after all operators
 * 
 * Pre - increment --- executes always before all operatos
 */

let num1 = 10;
// num + 1 same as num1++
num1++;     //num1 = num + 1

/**
 * decrement operator -- decreases the value of the variable by -1
 */

num1--;     //post-decrement
--num1;     //pre

let num2 = 20;
let res2 = num2++ - num2;
console.log(`res2 = ${res2}`);
console.log(`num2 = ${num2}`);