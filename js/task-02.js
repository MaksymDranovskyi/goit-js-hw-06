const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
const listRefs = ingredients.map((ingredient) => {
  const createLi = document.createElement("li");
  createLi.textContent = ingredient;
  createLi.classList = "text";
  return createLi;
});
ingredientsEl.append(...listRefs);