const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (input) => {
  if (input.currentTarget.value.trim() === "") {
    return (textOutput.textContent = "Anonymous");
  }
  textOutput.textContent = input.currentTarget.value;
});
