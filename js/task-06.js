const inputEl = document.getElementById('validation-input');


const dataLengthValue = inputEl.dataset.length
inputEl.addEventListener('blur', (e) => {
    e.target.value.length <= dataLengthValue ? e.target.style.outline = "3px solid #f44336" :  e.target.style.outline = "3px solid #4caf50" 
});

