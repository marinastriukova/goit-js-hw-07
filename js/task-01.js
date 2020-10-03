const liEl = document.querySelector("#categories");

console.log(`В списке ${liEl.children.length} категории.`);

const liTitleEl = liEl.querySelectorAll(".item");

liTitleEl.forEach(elem => {
  console.log(`Категория: ${elem.firstElementChild.textContent}\nКоличество элементов: ${elem.lastElementChild.children.length}`);
});
