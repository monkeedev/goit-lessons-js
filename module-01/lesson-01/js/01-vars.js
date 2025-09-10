'use strict';
/**
 * Змінні та типи даних
 *
 * - Оголошення змінних з let и const
 * - Перевизначення значення
 * - Найменування змінних
 * - Вибір між const і let
 * - Числа, рядки, булі, null, undefined
 * - Оператор typeof
 */

// Використання `let`
let x = 40;
console.log(x)

x = "string"
console.log(x)

// Використання `const`
const y = 2;
//console.log(y);

// const dummyName = 'John Doe'

/*
 * Така нотація дає інформацію іншим розробникам, 
 * що ця константа використовуюється для якогось обчислення 
 * та нею можна оперувати з місця її визначення
 * 
 * const DUMMY_NAME = 'John Doe'
 * const MAX_WIDTH_PX =  1000
*/

// Типи даних
const num = 42;
console.log(typeof x);

const str = 'Serhii';
console.log(typeof name);

const bool = true; // false
console.log(typeof isAuthorized);

let letWithBool;
console.log(typeof isBoxFull);

letWithBool = null
console.log(null, typeof null); // видасть в консолі 'object'

// Тут ми викликаємо промпт для спілкування з користувачем
// Результат завжди буде зберігатись з типом `string`  
const name = prompt('What is your name?');
console.log(name, typeof name)

const age = prompt('What is your age?');
console.log(age, typeof age)

// Приведення `string` до `number` для подальшої роботи  
const ageNumber = Number(age);
console.log(ageNumber)