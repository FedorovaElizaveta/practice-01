//Напишіть функцію, яка приймає масив чисел як аргумент та повертає суму всіх елементів масиву. Використовуйте цикл for-of для перебору елементів масиву та підрахунку суми.
const numbers = [1, 2, 3, 4, 5];

function arraySum(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  console.log(sum);
}
arraySum(numbers);
