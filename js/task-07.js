const fontControler = document.querySelector("#font-size-control")
const spanEl = document.querySelector("#text")

fontControler.addEventListener("input", (event) => {
    spanEl.style.fontSize = `${event.currentTarget.value}px`
})