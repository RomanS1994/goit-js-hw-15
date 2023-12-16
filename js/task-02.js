const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");

const createMarkup = ingredients.map((ingredient) => {
  let li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  return li;
});

console.log(createMarkup);
listIngredients.append(...createMarkup);
