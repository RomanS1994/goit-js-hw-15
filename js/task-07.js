const inputControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
// console.log(inputControl);
inputControl.value = 24;

inputControl.addEventListener("input", handlerInput);
console.dir(inputControl);

function handlerInput(evt) {
  text.style.fontSize = evt.currentTarget.value + "px";
}
