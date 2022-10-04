function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls") 
console.log(controls);

const input = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
     boxes.innerHTML = '';
  amount = input.value;
    const items = [];
    for (let i = 0; i < amount; i += 1) {
        const createBox = document.createElement('div');
        createBox.style.backgroundColor = getRandomHexColor();
        createBox.style.width = (i * 10) + 20 + 'px';
        createBox.style.height = (i * 10) + 20 + 'px';

        items.push(createBox);
    }
    boxes.append(...items);
}
function ClearBoxes() {
    boxes.innerHTML = '';
}
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', ClearBoxes);