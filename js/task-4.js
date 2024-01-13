//  *? За допомогою циклу for складіть усі парні числа від min до max
//   *? числа від max до min за спаданням
//  *? Напишіть цикл, який виводить у консоль
//   *? усіх парних чисел від min до max

const max = 50;
const min = 23;

let sum = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
      sum += i;
  }
}

 console.log(sum) 
