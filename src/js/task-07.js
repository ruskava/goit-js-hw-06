const input = document.getElementById('font-size-control');
const span = document.getElementById('text');
input.addEventListener('input', onBlur);

function onBlur(a) {
    span.style.fontSize = a.currentTarget.value + "px";
}