const inputLength = document.querySelector("#validation-input");
console.dir(inputLength);

inputLength.addEventListener("blur", handlerInput);

function handlerInput(evt) {
  //   console.log(evt.currentTarget.value.length);
  if (evt.currentTarget.value.length < Number(inputLength.dataset.length)) {
    return inputLength.classList.add("valid");
  }

  inputLength.classList.remove("valid");
  inputLength.classList.add("invalid");
}
