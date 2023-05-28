const sizeControlEl = document.getElementById('font-size-control');

const fontEl = document.getElementById('text');

sizeControlEl.addEventListener('input', (e) => {

    const currentValue = sizeControlEl.value;

    fontEl.style.fontSize = `${currentValue}px`;

});


