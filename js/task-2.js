//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      70 === 01:10



function modTime(value) {
    const hours = String(Math.floor(value/60)).padStart(2, '0');
    const mins = String(value % 60).padStart(2, '0');
    
    return `${hours}:${mins}`;
}




console.log(modTime(70));
console.log(modTime(65));



// Як копіювати вниз рядок
// SHIFT + ALT + DOWN
// SHIFT + OPTION + DOWN





