const dectBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');

let counterValue = 0;
dectBtn.addEventListener("click", () => {
    counterValue -= 1;
    spanValue.textContent = counterValue;
});

incrBtn.addEventListener("click", () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
});

