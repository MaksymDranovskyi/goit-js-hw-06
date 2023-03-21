let counterValue = 0;
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const valueCount = document.querySelector("#value");

const decrementCount = function () {
    counterValue -= 1;
    valueCount.textContent = counterValue;
};

const incrementCount = function () {
    counterValue += 1;
    valueCount.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementCount);
incrementBtn.addEventListener("click", incrementCount);