const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementButton.addEventListener('click', () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

incrementButton.addEventListener('click', () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
})