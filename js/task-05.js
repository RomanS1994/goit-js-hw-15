const userName = document.querySelector("#name-input");
const newUserName = document.querySelector("#name-output");

userName.addEventListener("input", handlerInput);
function handlerInput(evt) {
  if (evt.currentTarget.value === "") {
    return (newUserName.textContent = "Anonymous");
  }
  newUserName.textContent = evt.currentTarget.value;
}
