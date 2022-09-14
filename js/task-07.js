const inputEl = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

inputText.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', changeInputEl);

function changeInputEl(event) {
    console.log(event.currentTarget.value);
inputText.style.fontSize = `${event.currentTarget.value}px`;
}