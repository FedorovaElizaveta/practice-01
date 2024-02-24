/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/


const boxEl = document.querySelector('#box');
const btnFirstlEl = document.querySelector('#decrease');
const btnSecondEl = document.querySelector('#increase');

btnFirstlEl.addEventListener('click', decreaseFunc);
btnSecondEl.addEventListener('click', increaseFunc);
let boxWidth = parseInt(getComputedStyle(boxEl).width);
let boxHeight = parseInt(getComputedStyle(boxEl).height);

function increaseFunc() {
    boxWidth += 10;
    boxHeight += 10;
    boxEl.style.width = `${boxWidth}px`;
    boxEl.style.height = `${boxHeight}px`;
}

function decreaseFunc() {
    boxWidth -= 10;
    boxHeight -= 10;
    boxEl.style.width = `${boxWidth}px`;
    boxEl.style.height = `${boxHeight}px`;
}