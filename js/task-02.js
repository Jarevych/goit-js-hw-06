const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const newListEl = ingredients.map((ingredient) => {
  const addListEl = document.createElement("li");
  addListEl.textContent = ingredient

  addListEl.classList.add("item")
  return addListEl;
})

list.append(...newListEl)
console.log(newListEl)