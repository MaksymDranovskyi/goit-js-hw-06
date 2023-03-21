const listWithItem = document.querySelectorAll(".item")
console.log(`Number of categories: ${listWithItem.length}`)

listWithItem.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});
