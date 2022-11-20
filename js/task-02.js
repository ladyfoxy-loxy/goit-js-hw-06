const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector ("#ingredients");

const listItems = ingredients.map (item => {
  const listEl = document.createElement ("li");
  listEl.textContent = item;
  listEl.classList.add ("item");
  return listEl;
});

console.log (listItems);
ulEl.append(...listItems);