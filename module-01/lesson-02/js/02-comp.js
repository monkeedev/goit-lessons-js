/**
 * Оператори
 *
 * - Оператори порівняння
 * - Оператори рівності
 * - Приведення типів операндів
 */

// Числа
console.log(42 > 24)
console.log(42 < 24)

const password = prompt("enter your password");
const isInvalid = password.length >= 8

// Рядки
console.log('alice' > 'alice')

// Приведення типів
console.log(42 > 24)
console.log("4" > 4)
console.log("4" == 4)
console.log("4" === 4)
console.log(false === 42)

// Суворе / несуворе порівняння
console.log("2" == 2)
console.log(Number("2") === 2) 

const didFinishRegistration = "1" // true

console.log(Number(didFinishRegistration) == true)

console.log(4.01 == 4.01)