const inputEl = document.getElementById('validation-input');


const dataLengthValue = Number(inputEl.dataset.length)
inputEl.addEventListener('blur', (e) => {
    if (e.target.value.length === dataLengthValue) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else
     {
      inputEl.classList.add('invalid');
      inputEl.classList.remove('valid');
    };
});

