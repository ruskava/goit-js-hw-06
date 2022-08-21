const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  ingredients: document.querySelector("#ingredients"),
};
const createListItem = (text) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = text;
  refs.ingredients.append(li);
};
// const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
ingredients.forEach((ingredient) => createListItem(ingredient));
