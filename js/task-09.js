function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color'); 
const changeColorBtn = document.querySelector('.change-color'); 

const handlerChangeColor = () => {
  const randomColorHex = getRandomHexColor();
  spanColor.textContent = randomColorHex;
  document.body.style.backgroundColor = randomColorHex;
}

changeColorBtn.addEventListener('click', handlerChangeColor)


