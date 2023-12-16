const categoriList = document.querySelector("#categories");

const categoriItems = categoriList.querySelectorAll(".item");
console.log(`Number of categories ${categoriItems.length}`);

categoriItems.forEach((categoriItem) => {
  const category = categoriItem.querySelector("h2").textContent;
  console.log(`Category: ${category}`);

  const elements = categoriItem.querySelectorAll("ul li").length;
  console.log(`Elements: ${elements}`);
});
