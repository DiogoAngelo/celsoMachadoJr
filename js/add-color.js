export default function initAddColor() {
    const btnListen = document.querySelectorAll('.click');
    const imgColor = document.querySelectorAll('.img');

    function addColor(index) {
        imgColor[index].classList.add('ativo');
    }
    function removeColor() {
        imgColor.forEach((item) => {
            item.classList.remove('ativo');
        });
    }
    btnListen.forEach((listen, index) => {
        listen.addEventListener('mouseover', () => {
            addColor(index)
        });
        listen.addEventListener('mouseleave',removeColor);
    });
}

