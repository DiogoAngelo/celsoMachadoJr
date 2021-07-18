export default function initMenuBar() {
  const navBars = document.querySelectorAll('.navegacao');

  function showBar() {
    navBars.forEach((navBar) => {
      const navBarHeight = navBar.getBoundingClientRect().top;
      if (navBarHeight < -50) {
        if (!navBar.classList.contains('ativo')) {
          navBar.classList.add('ativo');
        }
      }
      if (window.scrollY === 0) {
        if (navBar.classList.contains('ativo')) {
          navBar.classList.remove('ativo');
        }
      }
    });
  }
  window.addEventListener('scroll', showBar);
}
