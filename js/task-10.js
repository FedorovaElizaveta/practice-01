// Завдання: Фільтрування елементів масиву за заданою умовою за допомогою циклу for.

// Опис:
// Напишіть функцію, яка приймає масив чисел і повертає новий масив, що містить лише ті елементи вихідного масиву, які більші від певного порогового значення.

const numbers = [10, 5, 20, 8, 15, 2];
const threshold = 10;

function filterArr(arr) {
const newArr = [];
    for(const number of arr) {
        if(number > threshold) {
            newArr.push(number);
        }
    }
return newArr;
}

console.log(filterArr(numbers));