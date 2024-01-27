//Створити функцію, яка буде отримувати рядок та массив, шукати в массиві цей рядок і видаляти його
const stones = ["Смарагд", "Діамант", "Сапфір", "Щебінь"];

function deleteElement(arr, string) {
  console.log(string);
  const arrSecond = [...arr];
  arrSecond.splice(arr.indexOf(string), 1);
  return arrSecond;
}

console.log(deleteElement(stones, "Сапфір"));
console.log(stones);
