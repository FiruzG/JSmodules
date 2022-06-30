/**
 * Convert temperature values in to different units
 * 
 * F-> C
 * F -> K
 * 
 * C -> F
 * c -> K
 * 
 * K -> F
 * K -> C
 * 
 * https://www.rapidtables.com/convert/temperature/index.html
 * 
 * Due Date Jul-3 EOD
 */

let fTemp1 = 90;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);