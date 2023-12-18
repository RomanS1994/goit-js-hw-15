const input = document.querySelector("input");

input.addEventListener("blur", handlerInput);
// console.dir(input);
function handlerInput(evt) {
  //   console.log(evt.currentTarget.value.length);
  if (evt.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  }
  input.classList.remove("valid");
  input.classList.add("invalid");
}
