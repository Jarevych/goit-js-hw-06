function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor())
const bodyEl = document.querySelector('body')
const spanClrEl = document.querySelector('.color')
const changeClrBtn = document.querySelector('button');
function changeClr () {
  spanClrEl.textContent = `${getRandomHexColor()}`;
  bodyEl.style.backgroundColor = getRandomHexColor();
};
changeClrBtn.addEventListener('click', changeClr
);