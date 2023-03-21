const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка заповніть усі поля");
  }

  const result = `Email: ${email.value}, Password: ${password.value}`;
  console.log(result);

  event.currentTarget.reset();
}
