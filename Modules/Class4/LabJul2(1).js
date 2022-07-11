/**
 * Ternary Operator:
 * 
 * 
 * 
 */

let age = 17
let areYouEligibleToVote = age >= 18 ? 'Yes' : 'No';
console.log(`\nbcz your age is ${age}, are you eligible to vote: ${areYouEligibleToVote}`);


age = 16;
let citizenship = 'USA';
areYouEligibleToVote = age >= 18 && citizenship === 'USA' ? 'Yes' : 'No';
console.log(`\nbcz your age is ${age} and citizenship is ${citizenship}, are you eligible to vote: ${areYouEligibleToVote}`);

/** 
 * ! (not operator)
 * 
 * !== (not equals to)
 * !=
 * 
 * if fName !== lName, move ahead in the Sign up process
 * otherwise show error 'First name cannot be same as last name'
 * 
 * if not weekend then going to work
 * 
 * let isWeekend = true;
 * if (!weekEnd) -> go to work/school
 * 
 */


/**
 * Check on same variable with increment example.
 */

/**
 * indexOf
 * startsWith
 * 
 */

let myName = 'Deepak Sharma';

let doesStartWith_eep = myName.startsWith('eep');
console.log(doesStartWith_eep);

let doesStartWith_deep = myName.startsWith('deep');
console.log(doesStartWith_deep);

let doesStartWith_Dee = myName.startsWith('Deepak Sha');
console.log(doesStartWith_Dee);

/**
 * indexOf
 *      returns the index of given pattern in the String
 *      checks for exact pattern
 *      checks for ONLY first occurrence
 * 
 */
let indexOf_p = myName.indexOf('p');    // 3

let indexOf_a = myName.indexOf('a');    // 4

let indexOf_ak_S = myName.indexOf('ak S');    // 4

let indexOf_ak_s = myName.indexOf('ak s');    // -1


const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let num;
/**
 * 1) if String has more than one instance of 'b' (ignoring cases), assign 10 into num
 * otherwise assign 20 into num
 * 
 * 2) print the result for:
 *      the sentence-length is greater than 20
 *      the sentence has only one instance of body (ignoring cases)
 *      the sentence starts and ends with same character which is '.'
 *      in the sentence 'said' appears before the word 'body' word
 * 
 */
console.log(`num -> ${num}`);



















