const rangeInput = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text')

alert("змінив в html дефолтне значення ренджу, шоб при першій події шрифт не перескакував з 50 до 17 пікселів =)")

rangeInput.addEventListener('input', (evt) => {
    spanText.style.fontSize = `${evt.target.value}px`
});