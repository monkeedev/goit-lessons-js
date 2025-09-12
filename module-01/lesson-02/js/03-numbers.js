/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

const WIDTH = "1000px"
console.log(Number.parseInt(WIDTH) / 640)

const price = "9.99$"
console.log(parseFloat(price))
console.log(parseFloat(price))

parseFloatWithPower(4)

console.log(Math.max(4, 8 , 42, 15, 16, 23))
console.log(Math.min( 42, 15, 16, 4, 8 , 23))

const x = 42.5
const height = 179.50000000000001

console.log(Math.floor(x))
console.log(Math.ceil(x))
console.log(Math.round(height))

console.log(Number(42).toFixed(2))
console.log(Number(42.000200000000000000001).toFixed(10))
console.log(Math.PI.toFixed(100))

console.log(0.1 + 0.2 === 0.3)

/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

const value = 27.5;
console.log(Math.floor(value))
console.log(Math.ceil(value))
console.log(Math.round(value))

const value2 = 27.9;
console.log(Math.floor(value2))
console.log(Math.ceil(value2))
console.log(Math.round(value2))










function parseFloatWithPower(x) {

  console.log(x * x)
}

