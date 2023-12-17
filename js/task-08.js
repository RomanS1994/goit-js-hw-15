const registerForm = document.querySelector(".login-form");
// console.dir(registerForm);

registerForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const email = evt.currentTarget.elements.email.value;
  const password = evt.currentTarget.elements.password.value;
  //   console.log(email);
  //   console.log(password);

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    return;
  }
  const result = {
    email: email,
    password: password,
  };
  console.log(result);
  registerForm.reset();
}
