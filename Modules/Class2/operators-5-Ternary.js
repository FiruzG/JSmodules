/**
 * Ternary (?:) operator used in situation where one of two values will be assigned depending on the result of conditions
 * 
 * 4.5, 5.5
 * if credit score > 700, rate will be 4.5 else 5.5
 * if credit score > 700 and first time home buyer, rate will be 4.5 else 5.5
 * 
 * 
 * Syntax:
 * varName = condition(s) ? value1 if condition is true : value2 if condition is False
 * 
 */

let userCreditScore = 770;
let mortgaeRate = userCreditScore > 700 ? 4.5 : 5.5;

console.log(`\nCredit score -> ${userCreditScore}`);
console.log(`\nMortage Rate -> ${mortgaeRate}`);

//* if credit score > 700 and first time home buyer, rate will be 4.5 else 5.5
let userCreditScore2 = 710;
let isFirstTimeBuyer = true;

let mortgaeRate2 = userCreditScore2 > 700 && isFirstTimeBuyer ? 4.5 : 5.5;
console.log(mortgaeRate2);

let currentTem = 121;
let season = (currentTem === 80) ? `It's summer` :
    (currentTem < 40 ) ? `It is winter`:
    (currentTem > 120) ? `You are in Hell`: 'No Ida';

console.log(`The season is: ${season}`);
