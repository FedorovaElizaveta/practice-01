// *? Напишіть код, який запитуватиме
// *? логін за допомогою prompt та логувати результат
// *? у консоль браузера
// *? Якщо відвідувач вводить "Адмін",
// *? то prompt запитує пароль.
// *? Пароль перевіряти так:
// *? Якщо введено пароль "Я головний",
// *? то вивести рядок "Здрастуйте!"
// *? інакше виводити рядок "Невірний пароль!"

const value=prompt("Введіть логін")

if (value==="Адмін"){
    const password=prompt("Введіть пароль")
    if(password==="Я головний"){
        console.log("Здрастуйте!")
    }else{
        console.log("Невірний пароль!")
    }
}else{
    console.log("Я вас не знаю!")
}