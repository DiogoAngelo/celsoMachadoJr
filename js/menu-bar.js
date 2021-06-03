export default function initMenuBar() {
    const navBar = document.querySelector('.navegacao');
    const navBarHeight = navBar.getBoundingClientRect().top;

    function showBar() {
        if(navBarHeight < -50) {
            navBar.classList.add('ativo');
        }
    }
    window.addEventListener('scroll', showBar);
}
