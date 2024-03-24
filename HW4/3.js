"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const randomNumbers = [];
let summArrayElements = 0;
let minValue = 10;
const newArray = [];

for (let i = 0; i < 5; i++) {
  const currentNumber = Math.floor(Math.random() * 10);
  randomNumbers.push(currentNumber);
  summArrayElements += currentNumber;
  if (currentNumber === 3) {
    newArray.push(i);
  }
  if (currentNumber < minValue) {
    minValue = currentNumber;
  }
}

console.log(`Массив случайных чисел от 0 до 10: [${randomNumbers}]`);
console.log(`Сумма элементов массива: ${summArrayElements}`);
console.log(`Минимальное значение в массиве: ${minValue}`);
console.log(`Новый массив, содержащий индексы, в которых элементы были равны "3": [${newArray}]`);
