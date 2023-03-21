function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const colorChange = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

colorChange.addEventListener("click", (onChangeColorButtonClick) => {
  const bgColor = getRandomHexColor();
  bodyEl.style.backgroundColor = bgColor;
  spanText.textContent = bgColor;
});
