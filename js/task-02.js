const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('ul')
const itemEl = document.createElement('li');
itemEl.classList.add('item');
itemEl.textContent = 'Potatoes';

const itemEl1 = document.createElement('li');
itemEl1.classList.add('item');
itemEl1.textContent = 'Mushrooms';

const itemEl2 = document.createElement('li');
itemEl2.classList.add('item');
itemEl2.textContent = 'Garlic';

const itemEl3 = document.createElement('li');
itemEl3.classList.add('item');
itemEl3.textContent = 'Tomatos';

const itemEl4 = document.createElement('li');
itemEl4.classList.add('item');
itemEl4.textContent = 'Herbs';

const itemEl5 = document.createElement('li');
itemEl5.classList.add('item');
itemEl5.textContent = 'Condiments';

ulEl.append(itemEl, itemEl1, itemEl2, itemEl3, itemEl4, itemEl5);