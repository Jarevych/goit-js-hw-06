
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.getElementById('value');

let counter = 0;

function decrementCounter () {
    counter--;
    updateValue();
}

function incrementCounter () {
    counter++;
    updateValue();
}
decrementBtn.addEventListener('click', decrementCounter);
incrementBtn.addEventListener('click', incrementCounter);

function updateValue() {
    counterValue.textContent = counter;
}


