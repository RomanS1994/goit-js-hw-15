// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const categoriList = document.querySelector("#categories");
// console.dir(categoriList);

const categoriItems = categoriList.querySelectorAll(".item");
console.log(`Number of categories ${categoriItems.length}`);

categoriItems.forEach((categoriItem) => {
  const category = categoriItem.querySelector("h2").textContent;
  console.log(`Category: ${category}`);

  const elements = categoriItem.querySelectorAll("ul li").length;
  console.log(`Elements: ${elements}`);
});
