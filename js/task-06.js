const validationInput = document.querySelector('#validation-input');
const correctInputLength = validationInput.dataset.length;

validationInput.addEventListener('blur', () => {
    if (validationInput.value.length !== +correctInputLength) {
        validationInput.classList.add('invalid')
        validationInput.classList.remove('valid')
    } else {
        validationInput.classList.add('valid')
        validationInput.classList.remove('invalid')
    }
})