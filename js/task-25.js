/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

// <p class="taskTitle">ЗАДАЧА 13</p>
// <ul class="grid">
//   <li class="gridItem"></li>
//   <li class="gridItem"></li>
//   <li class="gridItem"></li>
//   <li class="gridItem"></li>
//   <li class="gridItem"></li>
//   <li class="gridItem"></li>
//   <li class="gridItem"></li>
//   <li class="gridItem"></li>
//   <li class="gridItem"></li>
// </ul>

const circleContainer = document.querySelector(".grid");

circleContainer.addEventListener("mouseover", handleMouseover);
circleContainer.addEventListener("mouseout", handleMouseout);

function handleMouseover(event) {
  console.log(event.target);
  console.log(event.currentTarget);
  if (!event.target.classList.contains("gridItem")) return;
  
  event.target.style.opacity = 0;
}

function handleMouseout(event) {
    if (!event.target.classList.contains("gridItem")) return;
      event.target.style.opacity = 1;
}