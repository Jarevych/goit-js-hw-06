const categoriesListEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesListEl.length}`)

categoriesListEl.forEach((el, index, array) => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.children[1].children.length}`)
})

