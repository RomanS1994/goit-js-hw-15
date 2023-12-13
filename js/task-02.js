// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// console.log(ingredients);
const listIngredients = document.querySelector("#ingredients");
// console.log(listIngredients);

const createMarkup = ingredients.map((ingredient) => {
  let li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  return li;
});

console.log(createMarkup);
listIngredients.append(...createMarkup);
