/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

const name = "Serhii Zakharov"       // Подвійні лапки
const otherName = 'Serhii Zakharov'  // Одинарні лапки 

// Шаблонні рядки 
const age = 28
const templateName = `Serhii Zakharov, age ${age}`

// Індексація
console.log(templateName[10])

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
// const msg = `${companyName} has ${repairBots + defenceBots} in stock`;
// console.log(msg); // "Cyberdyne Systems has 200 bots in stock"