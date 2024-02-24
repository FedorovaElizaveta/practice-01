/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
*/

const circle = document.querySelector(".outerCircle");

circle.addEventListener("click", oneMove);
function oneMove(event) {
  if (circle.style.position === "absolute") {
    circle.style.position = "static";
    window.removeEventListener("mousemove", oneMouseMove);
    return;
  }
  circle.style.position = "absolute";
  window.addEventListener("mousemove", oneMouseMove);
}
function oneMouseMove(event) {
  console.log(event.pageX);
  console.log(event.pageY);
  circle.style.top = `${event.pageY - 15}px`;
  circle.style.left = `${event.pageX - 15}px`;
}
