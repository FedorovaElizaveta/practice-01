/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази

<!-- ЗАДАЧА 6 -->
    <div>
      <p class="taskTitle">ЗАДАЧА 6</p>
      <ul class="list">
        <li class="listItem">1</li>
        <li class="listItem">4</li>
        <li class="listItem">8</li>
        <li class="listItem">16</li>
        <li class="listItem">20</li>
        <li class="listItem">30</li>
      </ul>
      <button id="double">Удвоить</button>
    </div>
    */
const list = document.querySelectorAll(".listItem");
const btn = document.querySelector("#double");

btn.addEventListener("click", toDouble);
function toDouble(event) {
  list.forEach(
    (listItem) => (listItem.textContent = parseInt(listItem.textContent) * 2)
  );
}
