// Due Date : Tuesday Jul-05

const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
result1 = sentence1.length >= 10 ? 15 : 25;
console.log(`result1 -> ${result1}`);


const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */
let sentenceReplaceAll_A_a_withAlpha = sentence2.replace(/a/gi, "Alpha");
console.log(`\nsentence with all a/A replaced with the word'Alpha':\n${sentenceReplaceAll_A_a_withAlpha}`);

//

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */
let sentence3CheckLength = sentence3.length;
console.log(`\n1. The length of the sentence3 is:\n${sentence3CheckLength} characters`);

let sentence3CheckIfStartsWith_health = sentence3.toLowerCase().startsWith("health");
console.log(`\n2. sentence3 starts with the wod "healt": ${sentence3CheckIfStartsWith_health}`);

let sentence3CheckIfStartsWith_Body = sentence3.toLowerCase().replace(/b/gi,'B').includes('Body');
console.log(`\n3. Sentence3 contains the workd 'Body': ${sentence3CheckIfStartsWith_Body}`);

let sentence3CheckIndexof_Body = sentence3.toLowerCase().replace(/b/gi,'B').indexOf('Body');
console.log(`\n4. Index of 'Body' in sentence3: ${sentence3CheckIndexof_Body}`);


let sentence3EndsWith = sentence3.charAt(sentence3CheckLength - 1);
console.log(`\n5. The last character in the sentence3: ${sentence3EndsWith}`);

let bodyFirstCount = sentence3.toLowerCase().replace(/b/gi, 'B').indexOf('Body');
let bodyNextCount = sentence3.toLowerCase().replace(/b/gi, 'B').lastIndexOf('Body');
let bodyCompare = bodyFirstCount == bodyNextCount && bodyFirstCount >= 0;
console.log(`\n6. Word 'Body' is present only once: ${bodyCompare}` );
