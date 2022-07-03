/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Due Date: Jul-3 EOD
 * 
 */


 let fTemp = 90;

// F -> C
// T(°C) = (T(°F) - 32) × 5/9

let fToCtemp = (fTemp - 32) * 5/9;
console.log(`\n${fTemp}°F is equals to ${fToCtemp}°C`);


// F ==> K
// T(K) = (T(°F) + 459.67)× 5/9
let fToKtemp = ((fTemp) + 459.67) * 5/9;
console.log(`\n${fTemp}°F is equal to ${fToKtemp}K`);

//

let cTemp = 42;

// C -> F
// T(°F) = T(°C) × 9/5 + 32
let cToFtemp = cTemp * 9/5 + 32;
console.log(`\n${cTemp}°C is equal to ${cToFtemp}°F`);

// C -> K
// T(K) = T(°C) + 273.15
let cToKtemp = cTemp + 273.15;
console.log(`\n${cTemp}°C is equal to ${cToKtemp}K`);

//

let kTemp = 100;

// K -> F
//T(°F) = T(K) × 9/5 - 459.67
let kToFtemp = kTemp * 9/5 - 459.67;
console.log(`\n${kTemp}K is equal ${kToFtemp}°F`);

// K -> C
//T(°C) = T(K) - 273.15
let kToCtemp = kTemp - 273.15
console.log(`\n${kTemp} is equal to ${kToCtemp}°C`);