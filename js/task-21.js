/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const leftInput = document.querySelector("#leftSwapInput");
const rightInput = document.querySelector("#rightSwapInput");
const btn = document.querySelector("#swapButton");
const toSwapInputs = (event) => {
  const leftValue = leftInput.value;
  const rightValue = rightInput.value;
  leftInput.value = rightValue;
  rightInput.value = leftValue;
};
btn.addEventListener("click", toSwapInputs);
