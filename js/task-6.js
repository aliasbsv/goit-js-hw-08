
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо елементи на сторінці
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Функція для створення колекції елементів
function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  let size = 30;
  let boxesHTML = '';
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10;
  }
  boxesContainer.innerHTML = boxesHTML;
}

// Функція для очищення колекції елементів
function handleButtonDestroyClick() {
  boxesContainer.innerHTML = '';
}

// Функція для обробки натискання на кнопку створення
function handleButtonClick() {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
}

createButton.addEventListener('click', handleButtonClick);

destroyButton.addEventListener('click', handleButtonDestroyClick);





























