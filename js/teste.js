const header = document.querySelector('.header-grid');
const btn = document.querySelector('.button');

async function handleClick() {
  const imagem = await fetch('./img/capa-color.png');

  const finalImg = imagem.url;
  addColor(finalImg);
}
function addColor(finalImg) {
  header.setAttribute('style', `background-image: url(${finalImg})`);
}

btn.addEventListener('click', handleClick);
