function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("input"),

  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
};

refs.btnCreate.addEventListener("click", handlerClick);
refs.btnDestroy.addEventListener("click", destroyBoxes);

/****** boxes ******/

function createBoxes(amount) {
  destroyBoxes();
  let sizeBox = 30;
  let markups = "";
  for (let i = 0; i < amount; i++) {
    sizeBox = sizeBox + 10;
    markups += `<div style="width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()};"></div>
    `;
  }
  refs.boxes.insertAdjacentHTML("beforeend", markups);
}

function handlerClick() {
  createBoxes(refs.input.value);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}
