/** 
* 
* Q1: 
* Print the length of the country name (without using String-length property) 
*/

let countryName = 'Seychelles Islands';

let arrayCountryName = countryName.split('').length;
console.log(`\nThe length of the word '${countryName}' is ${arrayCountryName} characters.`);

/** Q2: 
* Count the number of words in the sentence 
*/
const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

let countryWordCount = sentence.split(" ");
console.log(`\nThe word '${sentence}' consists of ${countryWordCount.length} words.`); 


/** 
* Q3: 
* Convert any 4-word sentence into Titlecase 
* 
* 'have a great day' -> 'Have A Great Day' 
* 'YOu lIVe ONlY ONcE' -> 'You Live Only Once' 
* 
*/
let theWord = 'shells from seychelles island beach ';
let arrayTheWord = theWord.split(" ");

let allOneSentencedTheWord = arrayTheWord[0].substring(0, 1).toUpperCase().concat(arrayTheWord[0].substring(1)).concat(
   ' ', arrayTheWord[1].substring(0, 1).toUpperCase().concat(arrayTheWord[1].substring(1)),
   ' ', arrayTheWord[2].substring(0, 1).toUpperCase().concat(arrayTheWord[2].substring(1)),
   ' ', arrayTheWord[3].substring(0, 1).toUpperCase().concat(arrayTheWord[3].substring(1)),
   ' ', arrayTheWord[4].substring(0, 1).toUpperCase().concat(arrayTheWord[4].substring(1))
)                                                                                                                                                           //4th method
console.log(`\nConverting the word ${theWord} into Titlecase: ${allOneSentencedTheWord}`);


/** 
* Q4: 
* Create abbreviation for any 4-word sentence 
* 
* 'have a great day' -> 'HAGD' 
* 'YOu lIVe ONlY ONcE' -> 'YLOO' 
* 'yOu neVER WaLK alOne' -> 'YNWA' 
* 
*/

let abrOfTheWord = arrayTheWord[0].substring(0, 1).toUpperCase().concat(
   arrayTheWord[1].substring(0, 1).toUpperCase(), 
   arrayTheWord[2].substring(0, 1).toUpperCase(),
   arrayTheWord[3].substring(0, 1).toUpperCase(),
   arrayTheWord[4].substring(0, 1).toUpperCase()
   );

console.log(`\nAbbreviation for the sentence '${allOneSentencedTheWord}' is: ${abrOfTheWord}`);
