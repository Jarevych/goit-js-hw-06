function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberOfBoxEl = document.querySelector('input');

const boxesBlockEl = document.querySelector('#boxes')

const createBtn = document.querySelector('[data-create]')

createBtn.addEventListener('click', createHandler);

console.log(numberOfBoxEl.value)
let size = 30;
function createHandler () {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${size}px`;
    boxEl.style.height = "30px";
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesBlockEl.append(boxEl);
  };

const destroyBtn = document.querySelector('[data-destroy]');

// destroyBtn.addEventListener('click', destroyHandler);

