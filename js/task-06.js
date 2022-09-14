const inputNameEl = document.querySelector('input');
const inputNameElLength = inputNameEl.getAttribute('data-length');

const onInputFocus = (event) => {
    event.target.classList.add('#validation-input')
};
inputNameEl.addEventListener('focus', onInputFocus);

const onInputBlur = (event) => {

    const requiredLength = event.currentTarget.value.length === Number(inputNameElLength);
    event.target.classList.remove('#validation-input');
    if (requiredLength) {
        console.log('add');
        event.currentTarget.classList.add('valid');
         event.currentTarget.classList.remove('invalid');
    }
    else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    }

    console.log(blur)
};
inputNameEl.addEventListener('blur', onInputBlur);