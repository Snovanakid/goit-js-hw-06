const rangeInput = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
spanText.style.fontSize = `${rangeInput.value}px`; 

rangeInput.addEventListener('input', (evt) => {
    spanText.style.fontSize = `${evt.target.value}px`
});