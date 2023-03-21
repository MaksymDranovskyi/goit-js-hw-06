const myInput = document.querySelector("#validation-input");

myInput.addEventListener("blur", (onBlur) => {
  const inputLength = onBlur.currentTarget.value.length;
  if (Number(myInput.dataset.length) === inputLength) {
    myInput.classList.add("valid");
    myInput.classList.remove("invalid");
  } else {
    myInput.classList.add("invalid");
  }
});
