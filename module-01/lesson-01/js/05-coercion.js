/**
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

const str = 42;
const bool = true;

// Явне перетворення типів
const strReally = String(str)
const strReally2 = `${str}`

console.log(typeof Number(strReally2));
console.log(typeof Number('hello')); // NaN - Not a Number

// boolean -> 1 | 0
//          true  false

// Неявне перетворення типів
console.log(false + 2);
console.log('50' + 2);
console.log('50' + true);
console.log('50' + null);
console.log('50' + undefined);
console.log(50 + '2');