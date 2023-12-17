const categoriList = document.querySelector("#categories");

const categoriItems = categoriList.querySelectorAll(".item");
console.log(`Number of categories ${categoriItems.length}`);

categoriItems.forEach((categoriItem) => {
  const category = categoriItem.firstElementChild.textContent;
  console.log(`Category: ${category}`);

  const elements = categoriItem.lastElementChild.childElementCount;
  console.log(`Elements: ${elements}`);
});
