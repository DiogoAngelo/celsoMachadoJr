export default function initAddColorHeader() {
  const header = document.querySelector('.header-home');
  const btn = document.querySelector('.button');

  function addColor() {
    header.classList.add('ativo');
  }
  function removeColor() {
    header.classList.remove('ativo');
  }

  btn.addEventListener('mouseover', addColor);
  btn.addEventListener('mouseleave', removeColor);
}
