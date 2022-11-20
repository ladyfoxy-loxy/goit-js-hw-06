const button = document.querySelector ('.change-color');
const colorBody = document.querySelector ('body');
const span = document.querySelector ('.color');

button.addEventListener('click', handleButton);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


function handleButton (event) {
  colorBody.style.backgroundColor = getRandomHexColor();
  span.textContent = colorBody.style.backgroundColor;
};