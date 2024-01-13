//   *? числа від max до min за спаданням
//  *? Напишіть цикл, який виводить у консоль
//   *? усіх парних чисел від min до max
const max = 50;
const min = 23;

for (let i = max; i >= min; i -= 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
