// У нас є об'єкт, у якому зберігаються зарплати
//    нашої команди
//    Напишіть код для підсумовування всіх зарплат і
//    збережіть його результат у змінній sum.
//    Якщо об'єкт salaries порожній, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

const getTotalSalaries = (salaries) => {
  let sum = 0;
  const values = Object.values(salaries);
  for (const value of values) {
    sum += value;
  }
  return sum;
};

console.log(getTotalSalaries(salaries));
