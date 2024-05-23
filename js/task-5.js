function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');
const colorBody = document.body;

colorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor(); // Генеруємо новий випадковий колір
  colorBody.style.backgroundColor = newColor; // Змінюємо колір фону <body> через інлайн-стиль
  colorSpan.textContent = newColor; // Задаємо значення кольору текстовим вмістом для <span class="color">
});