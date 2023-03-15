const rangeInput = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text')
spanText.style.fontSize = '50px'

rangeInput.addEventListener('input', (evt) => {
    spanText.style.fontSize = `${evt.target.value}px`
});