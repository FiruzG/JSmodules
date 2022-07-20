
// Due date: Thu (July 21) eod
/** 
* 
* Q1:
* Create a function to convert any sentence into Titlecase
*
* 'have a great day' -> 'Have A Great Day' 
* 'YOu lIVe ONlY ONcE' -> 'You Live Only Once' 
* 'gooD mORNIng' -> 'Good Morning' 
* 'apple banana cherry' -> 'Apple Banana Cherry'
*  
*/
console.log(`Q1:`);

function toTitlecase(text) {
    let arrayOfSentence = text.toLowerCase().split(' ');
    let sentenceToTitlecase = '';
    for (let i = 0; i <= arrayOfSentence.length-1; i++) {
        sentenceToTitlecase += arrayOfSentence[i].substring(0, 1).toUpperCase(
         ).concat(arrayOfSentence[i].substring(1)).concat(' ');
    }
    
    console.log(sentenceToTitlecase);
}
const sentence = 'gooD mORNIng';

toTitlecase(sentence);

/** 
* 
* Q2: 
* Create a function to reverse a String (word by word) 
* 'have a great day' -> 'day great a have'
* 'good morning' -> 'morning good'
* 'hello dear how are you doing' -> doing you are how dear hello'
* 'Learn' -> 'Learn'
* 
*/

console.log(`Q2:`);

function stringReverse (string) {
    let stringToArray = string.split(' ');
    let stringReverse = '';
    for (i = stringToArray.length -1; i >= 0; i--){
        stringReverse += stringToArray[i].concat(' ');

    }
    console.log(stringReverse);
}
const stringNormal = 'hello dear how are you doing';

stringReverse(stringNormal);
/**
*
* Q3:
* Create a function to find the total of numbers in the array
*
* [1, 2, 3, 4, 5] -> 15 * [1, 1, 1, 2, 3, 1, 2] -> 11
* [1, -1] -> 0 
*/
console.log(`Q3:`);

const numArray = [1, 1, 1, 2, 3, 1, 2];
function sumOfArray(array) {
    let sumOfArray = 0;
    for (i = 0; i <= array.length-1; i++){
        sumOfArray += array[i];
    }
    console.log(`The sum of numbers in the array is: ${sumOfArray}`);

}
sumOfArray(numArray);

/**
*
* Q4:
* Create a function to find the average of the given array:
* 
* avg = totalOfValues/numberOfValues 
* [1, 2, 3, 4, 5] -> 15/5 -> 3
* [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx 
* [1, -1] -> 0/2 -> 0 
*/

console.log(`Q4:`);
function averageOfArray(array) {
    let sumOfArray = 0;
    for (i = 0; i <= array.length-1; i++){
        sumOfArray += array[i];
    }
    let numArrayAverage = sumOfArray / (array.length -1);
    console.log(`The average of the sum of numbers in the array is: ${numArrayAverage}`);

}

console.log(`Q4 version 2:`);
function averageOfArrayfor(array) {
    let sumOfArray = 0;
    for (const num of array){
        sumOfArray += array[num];
    }
    let numArrayAverage = sumOfArray / (array.length -1);
    console.log(`The average of the sum of numbers in the array is: ${numArrayAverage}`);

}
averageOfArray(numArray);
averageOfArrayfor(numArray);