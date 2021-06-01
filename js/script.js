const btnListen = document.querySelectorAll('.click');
const imgColor = document.querySelectorAll('.img');

function addColor() {
    imgColor.forEach((item) => {
        item.classList.add('ativo');
    });
}
function removeColor() {
    imgColor.forEach((item) => {
        item.classList.remove('ativo');
    });
}

btnListen.forEach((listen) => {
    listen.addEventListener('mouseover', addColor);
    listen.addEventListener('mouseleave',removeColor);
})
