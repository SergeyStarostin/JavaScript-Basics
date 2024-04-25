/*
Задача 1
Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
найти минимальное число в массиве, решение задание должно состоять из одной строки
*/
arr = [1, 5, 7, 9];
console.log(`Минимальное число в массиве: ${Math.min(...arr)}`);

/*
Задача 2
Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: 
increment и decrement. Метод increment должен увеличивать значение счетчика на 1, 
а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть 
доступно только через методы объекта, а не напрямую.
*/
function createCounter() {
  const obj = {
    increment: (number) => ++number,
    decrement: (number) => --number,
  };
  return obj;
}
const newObj = createCounter();
console.log(`Результат инкремента числа: ${newObj.increment(5)}`);
console.log(`Результат декремента числа: ${newObj.decrement(8)}`);

/*
Задача 3
Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM 
и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); 
*/
const findElementByClass = function (item, className) {
  console.log(item);
  if (item.classList.contains(className)) {
    console.log(`Найден класс: ${className}`);
    return item;
  }
  for (let i = 0; i < item.childNodes.length; i++) {
    if (item.childNodes[i].nodeType === 1) {
      const foundElement = findElementByClass(item.childNodes[i], className);
      if (foundElement) {
        return foundElement;
      }
    }
  }
};

const itemEl = document.getElementsByClassName("conteiner")[0];
const nodeEl = findElementByClass(itemEl, "my-class");
console.log(
  "Первый найденный элемент с указанным классом в этом дереве:",
  nodeEl
);
