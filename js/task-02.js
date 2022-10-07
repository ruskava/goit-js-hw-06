const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


 const  ingredientsEl = document.querySelector("#ingredients");
  
  const elements = ingredients.map((ingredient) =>{
  const  ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = ingredient;
  return ingredientsEl;
  });
  ingredientsEl.append(...elements);
  console.log(ingredientsEl);



// const refs = {
//   ingredients: document.querySelector("#ingredients"),
// };
// const createListItem = (text) => {
//   const li = document.createElement("li");
//   li.classList.add("item");
//   li.textContent = text;
//   refs.ingredients.append(li);
// };
// // const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
// ingredients.forEach((ingredient) => createListItem(ingredient));
