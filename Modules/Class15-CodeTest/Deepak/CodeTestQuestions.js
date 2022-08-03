const CodeTestSolutions = require("./CodeTestSolutions");

const solution = new CodeTestSolutions();
/**
 * Create a function to return an array 
 *  after removing given number from the given array
 * 
 * 
 * 
 * [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
 * 
 * [21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65]
 * 
 * [-1, 2, 43, 65] , 11 -> [-1, 2, 43, 65]
 */
let inputArr = [1, 2, 3, 4, 5];
let toRemove = 2;
const resultArray1 = solution.removeNumberFromArray1(inputArr, toRemove);
console.log(`\nAnswer -> Q1:\nArray after removing "${toRemove}" from [${inputArr}] is : [${resultArray1}]`);

const resultArray2 = solution.removeNumberFromArray2(inputArr, toRemove);
console.log(`\nAnswer -> Q1:\nArray after removing "${toRemove}" from [${inputArr}] is : [${resultArray2}]`);

const resultArray3 = solution.removeNumberFromArray3(inputArr, toRemove);
console.log(`\nAnswer -> Q1:\nArray after removing "${toRemove}" from [${inputArr}] is : [${resultArray3}]`);


/**
 * Create a function to return the missing smallest positive number in given array
 * 
 * 
 * [1, 2, 3, 4, 5]   ->   6
 * 
 * [2, 3, 1, 56, 23, 11]  ->   4
 * 
 * [-1, 0, 2, 1]    ->  3
 * 
 * [1, 1, 2, 4, 3, 6, 4, 7, 9] ->   5
 * 
 */

let arrNum = [2, 3, 1, 56, 23, 11];
const missingNumber1 = solution.findMissingOne1(arrNum);
console.log(`\nAnswer -> Q2:\nMissing number in [${arrNum}] is ${missingNumber1}`);
const missingNumber2 = solution.findMissingOne2(arrNum);
console.log(`\nAnswer -> Q2:\nMissing number in [${arrNum}] is ${missingNumber2}`);


/**
 * Create a function to return the points to be marked against for over speeding.
 * 
 * For every 5mph over the speed limit, 1 point should be marked
 * 
 * function will:
 *      take userSpeed and speedLimit as input
 *      return the number of points should be marked against the license.
 * 
 * 
 * 
 * sl= 60 , us = 70 -> points = 2
 * 
 * sl = 60 , us = 63 -> points = 0
 *      63-60 = 3/5 = 0
 * 
 * sl = 75 , us = 70 -> points = 0
 * 
 * 
 * sl = 80 , us = 88 -> points = 1
 *      88-80 = 8/5 = 1
 * 
 * sl = 60 , us = 100 -> points = 8
 *      100-60 = 40/5 = 8
 * 
 * 
 * let sl;
 * console.log(sl);
 * 
 */

const userSpeed = 77;
const speedLimit = 60;
const points = solution.getTrafficPoints(userSpeed, speedLimit);
console.log(`\nAnswer -> Q3:\nUser speed: ${userSpeed}\nSpeed Limit: ${speedLimit}\nPoints against your license: ${points}\n`);









