const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', inputChange);
function inputChange(event) {
    refs.output.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        refs.output.textContent = 'Anonymous'
    }
}
console.log (inputChange)