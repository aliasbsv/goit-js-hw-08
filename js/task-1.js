
const ulElem = document.querySelectorAll('#categories li.item');
console.log(`Number of categories: ${ulElem.length}`);

for (const item of ulElem) {
    const titleElem = item.querySelector('h2');
    console.log(`Category: - ${titleElem.textContent}`);
    const liElem = item.querySelectorAll('ul li');
    console.log(`Elements: - ${liElem.length}`);
 } 

























/* // Отримуємо посилання на список категорій
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи з класом 'item' всередині списку
const categoryItems = categoriesList.querySelectorAll('.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Проходимо через кожен елемент li.item
for (let i = 0; i < categoryItems.length; i++) {
  const item = categoryItems[i];
  
  // Отримуємо текст заголовка (тег <h2>)
  const categoryName = item.querySelector('h2').textContent;
  
  // Отримуємо кількість елементів у вкладеному списку (теги <li>)
  const elementsCount = item.querySelectorAll('ul li').length;
  
  // Виводимо назву категорії та кількість елементів у категорії
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
} */