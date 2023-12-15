// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const valueEl = document.querySelector("#value");
let counterValue = 0;

const decrement = document.querySelector('[data-action = "decrement"]');
const increment = document.querySelector('[data-action = "increment"]');

increment.addEventListener("click", handlerClickPlus);
function handlerClickPlus() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

decrement.addEventListener("click", handlerClickMinus);
function handlerClickMinus() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
