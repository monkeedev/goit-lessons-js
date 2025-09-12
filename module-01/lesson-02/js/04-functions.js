/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

/**
 * [Приклад JSDoc]
 *  
 * @param {*} bonus - відсоток від загальної зарплатні 
 * @returns зарплатня з бонусом
 */
function calculateSalary(bonus = 0) {
  const salary = 3000;  

  // 0 - 0%
  // 1 - 100%
  return (salary + salary * bonus) + '$'
}

const john = calculateSalary(0.25)
const jack = calculateSalary(0.5)
const katy = calculateSalary(0.35)
const mykola = calculateSalary(0.15)

const serhii = calculateSalary()
const serhii2 = calculateSalary(0.1, 0,5, 0.6, 0.2)

const str = 'Hello world'

function printHelloWorld() {
  const str = 'Foo Bar'
  
  function printFooBar() {
    console.log('printFooBar:', str)
  }

  printFooBar()
}

printHelloWorld()
console.log(window.innerHeight)

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  const _weight = weight.replace(",", ".")
  const _height = height.replace(",", ".")
  
  // 65,5 -> 65.5

  // console.log(_weight);
  return (parseFloat(_weight) / Math.pow(_height, 2)).toFixed(1)
}

const bmi = calcBMI("65,5", "1,75");
console.log(bmi);

// Бонус-приклад: готуємо каву!

// function makeEspresso(gr) {
//   console.log(`Prepare ${gr} of espresso`);

//   function boilWater() {
//     const water = gr * 10 - 100;
//     console.log(`Boiling ${water}ml of water...`);

//     return water;
//   }

//   function putSugar(tbl) {
//     console.log(`Put ${tbl} tablespoons of sugar...`)

//     return tbl;
//   }

//   const boiledWater = boilWater()  

//   console.log(`Pour this ${boiledWater} of boiled water to cup...`);

//   const spoons = putSugar(4);
//   console.log(`Espresso with ${boiledWater} of water and ${spoons} of sugar is ready`)
// }

// makeEspresso(50)