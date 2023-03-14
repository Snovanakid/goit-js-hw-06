function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color'); 
const changeColorBtn = document.querySelector('.change-color'); 

const handlerChangeColor = () => {
  console.log('changed color')
  spanColor.textContent = `${getRandomHexColor()}`
  document.body.style.backgroundColor = `${spanColor.textContent}`
}

changeColorBtn.addEventListener('click', handlerChangeColor)


