let cityName = "New YOrK ciTy";             // is a String datatype
console.log(`cityName -> ${cityName}`);

let cityName2 = new String("New YOrK ciTy"); // is treated as an Object datatype

/**
 * Some properties of String
 * 
 * Length - gets the number of characters in the string
 */

let cityNameLength = cityName.length;
console.log(`\ncityName - > ${cityName}`);
console.log(`Length = ${cityNameLength}`);

/**
 * toUpperCase() - to convert String to Uppercase
 */
let cityName_U = cityName.toUpperCase();
console.log(`\ncityName -> ${cityName}`);
console.log(`cityName_u = ${cityName_U}`);

/**
 * toLowerCase() - to convert String to Lowercase
 */

 let cityName_L = cityName.toLowerCase();
 console.log(`\ncityName -> ${cityName}`);
 console.log(`cityName_u = ${cityName_L}`);

 /**
  * strartsWith() - if the String starts with the exact given pattern, returns true or false
  */
let cityNameStartsWith_n = cityName.startsWith('n');
console.log(`\ncityName -> ${cityName}`);
console.log(`is ${cityName} start with 'n' : ${cityNameStartsWith_n}`);
