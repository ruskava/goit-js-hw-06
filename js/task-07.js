const inpEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('text');

inpEl.addEventListener('mousemove', () => {
    spanEl.style.fontSize = `${inpEl.value}px`;
});