/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const btn = document.querySelector("#passwordButton");
const input = document.querySelector("#passwordInput");

const passwordChange = (event) => {
  if (input.type === "text") {
    input.type = "password";
    btn.textContent = "Розкрити";
  } else {
    input.type = "text";
    btn.textContent = "Приховати";
  }
};
btn.addEventListener("click", passwordChange);
