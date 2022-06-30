/**
 * Logical Operators (&&, ||, !)
 * && - and operator -- all combined conditions should be true for the result tu be true
 * 
 * || - or operator - any of the conditions has to be true for result to be true
 * 
 * ! - not operator
 * 
 * 
 */
let lVar1 = 10;
let lVar2 = 20;
let lVar3 = 30;
let lVar4 = 40;

let lRes1 = lVar1 <= lVar3 && (lVar2 === lVar3 + lVar4);
console.log(lRes1);

lRes1 = lVar1 <= lVar3 && !(lVar2 === lVar3 + lVar4);
console.log(lRes1);