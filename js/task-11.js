//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

function findSmallerNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return "Не масив";
  }
  if (!numbers.length) {
    return "масив порожній";
  }
  let smallNumber = numbers[0];
  for (const number of numbers) {
    if (number < smallNumber) {
      smallNumber = number;
    }
  }
  return smallNumber;
}
console.log(!Array.isArray(numbers));
console.log(findSmallerNumber(numbers));
