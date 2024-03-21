"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

/**
 * Нахождение максимального числа из 3 чисел
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @param {number} num3 третье число
 * @return {number} максимальное число
 */
function searchMax(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  }
  if (num2 >= num1 && num2 >= num3) {
    return num2;
  }
  return num3;
}

const firstNum = +prompt("Введите первое число");
const secondNum = +prompt("Введите второе число");
const thirdNum = +prompt("Введите третье число");

if (
  Number.isFinite(firstNum) &&
  Number.isFinite(secondNum) &&
  Number.isFinite(thirdNum)
) {
  console.log(
    `Максимальное значений из чисел [${firstNum}, ${secondNum}, ${thirdNum}] = ${searchMax(
      firstNum,
      secondNum,
      thirdNum
    )}`
  );
} else {
  console.log("Введены некорректные данные");
}
