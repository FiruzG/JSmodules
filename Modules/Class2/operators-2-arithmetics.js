/**
 * 
 * Arithmetic (+, -, *, /, %, ++, --)
 * 
 * % - Modulus
 * ++ -- Increment
 * -- - Decrement
 */

let num1 = 10;
let num2 = 20;
let num3 = num1 + num2;
console.log(`${num1} + ${num2} = ${num3}`);

console.log(`${num1} + ${num2} = ${num1 + num2}`);

console.log(`${num1} + ${num2} = ${num1 - num2}`);

console.log(`${num1} + ${num2} = ${num1 * num2}`);

console.log(`${num1} + ${num2} = ${num1 / num2}`);

/**
 * Modulus -- find the reminder for division. works with a whole numbers.
 * 
 * Division:
 *      10/2 = 5 (remaining = 0)
 *      9/2 = 4 (remaining = 1)
 *      8/3 = 2 (remainng = 2)
 *      7/10 = 0 (remaining = 7)
 *      10/7 = 1 (remaining = 3)
 *      10/3 = 3 (remaining = 1)
 *      8/8 = 1 (remaining = 0)
 */
num1 = 10;
num2 = 2;
num3  = num1%num2;
console.log(num3);

num1 = 7;
num2 = 10;
num3  = num1%num2;
console.log(`${num1} % ${num2} = ${num3}`);

/**
 * Increment operator (++)
 *      increases the value in variable by 1
 */

num1 = 10;
console.log(`num1 = ${num1}`);
num1++
console.log(`num1 = ${num1}`);

num1 = 10;
console.log(`num1 = ${num1}`);
++num1;
console.log(`num1 = ${num1}`);

/**
 * Post - increment --- executes always after all operators
 * 
 * Pre - increment --- executes always before all operatos
 */

num1 = 10;
let num4 = num1++; // assisgnment, post-increment
console.log(`num1 = ${num1}`); //num1 = 11
console.log(`num4 = ${num4}`); //num4 = 10

num1 = 10;
let num5 = ++num1; // pre-increment, assisgnment
console.log(`num1 = ${num1}`); //num1 = 11
console.log(`num4 = ${num5}`); //num4 = 10


let lVar1 = 10;
let lVar2 = 20;
let lVar3 = 30;
let lVar4 = 40;

let res1 = lVar1 + lVar2++;  // order -- addition, assignment, post-increment
console.log(`\n\nlVar1 = ${lVar1}`); // 10
console.log(`lVar2 = ${lVar2}`);     // 21
console.log(`res1 ${res1}`);         // 30   

// lVar1 = 10, lVar2 =21
let res2 = lVar1++ - ++lVar2;        // pre-increment, subtraction, assignment, post-increment
console.log(`\n\nlVar1 = ${lVar1}`); // 11
console.log(`lVar2 = ${lVar2}`);     // 22
console.log(`res1 ${res2}`);        // -12
