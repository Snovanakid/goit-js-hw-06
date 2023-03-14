const form = document.querySelector('.login-form')
const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (emailInput.value === "" || passwordInput.value === "") {
        return alert('all fields are required')
    } 
    console.log({
        email: emailInput.value,
        password: passwordInput.value,
    })
    evt.target.reset();
})
