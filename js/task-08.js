const formEl = document.querySelector('.login-form');


function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert("Please fill in all the fields!");
        return;
    }
    const userData = {
        email: email.value,
        password: password.value
    }
    console.log(userData);
    formEl.reset();
}
formEl.addEventListener('submit', handleSubmit);