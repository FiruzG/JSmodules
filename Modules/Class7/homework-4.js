// Due date: Fri (Jul 15) eod
/** 
 * create two variables, one is to store studentScore, and another one to store maxScore 
 * based on the student percentage, print the grade. 
 *  
 * Grade-A : 91-100%  
 * Grade-B : 81-90.99% 
 * Grade-c : 71-80.99% 
 * Grade-D : 61-70.99% 
 * Grade-E : 51-60.99% 
 * Grade-F : less than 51%
 *  
 * if the studentScore is invalid or more than maxScore, print "Invalid student score" 
 *
 * studentScore = 40
 * maxScore = 50 
 *
 * Grade -> C 
 *
 */
 console.log(`\nTask# 1`);

let gradeTable = ['Grade-A : 91-100%', 'Grade-B : 81-90.99%', 'Grade-c : 71-80.99%', 'Grade-D : 61-70.99%', 'Grade-E : 51-60.99%', 'Grade-F : less than 51%'];
for (let i = 0 ; i <= gradeTable.length -1 ; i++) {
    console.log(gradeTable[i]);
}

const maxScore = 150;
let studentScore = 140;
let scoreFormula = (studentScore / maxScore) * 100;


if (scoreFormula >= 91 && scoreFormula <= 100) {
    console.log(`your grade is 'A'`);
} else if (scoreFormula >= 81 && scoreFormula <= 90.99) {
    console.log(`your grade is 'B'`);
} else if (scoreFormula >= 71 && scoreFormula <= 80.99) {
    console.log(`your grade is 'C'`);
} else if (scoreFormula >= 61 && scoreFormula <= 70.99) {
    console.log(`your grade is 'D'`);
} else if (scoreFormula >= 51 && scoreFormula <= 60.99) {
    console.log(`your grade is 'E'`);
} else if (scoreFormula >= 0 && scoreFormula <= 50.99) {
    console.log(`your grade is 'F'`);
}
else {
    console.log("\nInvalid Studen Score.");
}


/** 
 * Create a variable and store any value in it. 
 * if the myNumber is divisible by 5, print "divisible by 5" 
 * if the myNumber is divisible by 3, print "divisible by 3"
 *  if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3" 
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber *
 *
 *  
 *  myNumber = 19 
 *
 */
console.log(`\nTask# 2`);
let myNumber = 30;
let divideBy_5 = myNumber % 5;
let divideBy_3 = myNumber % 3;

if (divideBy_5 == 0 && divideBy_3 == 0){
    console.log(`Your number ${myNumber} is divisibe by 5 and 3`);
} else if (divideBy_5 == 0) {
    console.log(`\nYour number ${myNumber} is divisible by 5`);
} else if (divideBy_3 == 0) {
    console.log(`\nYour number ${myNumber} is divisible by 3`);
} else {
    console.log(`\nYour number is ${myNumber}`);
}

/**
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto']; 
 *  
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index" 
 * otherwise add Earth as first name in the array, then print the entire array. 
 *
 */
 console.log(`\nTask# 3`);
 let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
console.log(planets);

if (planets.indexOf('Earth') == 0) {
    console.log(`Earth is mentioned in expected index`);
} else {
    planets.unshift('Earth');
    console.log(planets);
}
/** 
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby']; 
 * if BASKETBALL is present not in index-2, print "BASKETBALL is mentioned in the sports array" 
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced. 
 *
 */
 console.log(`\nTask# 4`);
 const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 let addedSport ='BASKETBALL1';
 // console.log(sports.indexOf('BASKETBALL'));

 if (sports.indexOf(addedSport) !== 0 && sports.indexOf(addedSport) > 0) {
    console.log(`BASKETBALL is mentioned in the sports array`);
 } else if (sports.indexOf(addedSport) == 2) {
    console.log(`BASKETBALL is present at index-2`);
 } else if (sports.indexOf(addedSport) < 0) {
    console.log(sports[1]);
    sports.splice(1, 1, addedSport);
    console.log(sports);
 }