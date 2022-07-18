// Due date: Mon (July 18) eod

/** 
* Q1:
*  Convert any sentence into Titlecase * 
* 'have a great day' -> 'Have A Great Day' 
* 'YOu lIVe ONlY ONcE' -> 'You Live Only Once'
* 'gooD mORNIng' -> 'Good Morning'
* 'apple banana cherry' -> 'Apple Banana Cherry' 
*/
console.log(`Q1:`);
const sentence = 'YOu lIVe ONlY ONcE';
let arrayOfSentence = sentence.toLowerCase().split(' ');
let sentenceAbr = '';

for (let i = 0; i <= arrayOfSentence.length-1; i++) {
    sentenceAbr += arrayOfSentence[i].substring(0, 1).toUpperCase(
     ).concat(arrayOfSentence[i].substring(1)).concat(' ');
}

console.log(`Converting "${sentence}" to Titlecase: ${sentenceAbr}\n`);
/**
* Q2:
* Reverse a String (word by word)
* 
* 'have a great day' -> 'day great a have'
* 'good morning' -> 'morning good'
* 'hello dear how are you doing' -> doing you are how dear hello'
* 'Learn' -> 'Learn'
* 
*/
console.log(`Q2:`);
const q2Sentence = 'hello dear how are you doing';
let q2SentenceArray = q2Sentence.split(' ');
let q2SentenceReverse = '';
for (i = q2SentenceArray.length -1; i >=  0; i--){
    q2SentenceReverse += q2SentenceArray[i].concat(' ');

}
console.log(`Reverse of the string '${q2Sentence}' to: '${q2SentenceReverse}'.\n`);
/**
* Q3:
* Find the total of numbers in the array
* 
*  [1, 2, 3, 4, 5] -> 15
* [1, 1, 1, 2, 3, 1, 2] -> 11
* [1, -1] -> 0 
*/
console.log(`Q3:`);
const numArray = [1, 1, 1, 2, 3, 1, 2];
let sumOfNumArray = 0;

for (i = 0; i <= numArray.length-1; i++){
    sumOfNumArray += numArray[i];
}
console.log(`Sum of the numbers: ${numArray} is equal to : ${sumOfNumArray}\n`);
/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0 
 */
console.log(`Q4:`);
let numArrayAverage = sumOfNumArray / (numArray.length -1);
 console.log(`Average of the sum of the numbers: ${numArray} is: ${numArrayAverage}`);