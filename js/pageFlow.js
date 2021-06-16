export default function initFlow() {
    const links = document.querySelectorAll('.navegacao a');

    function handleClick(event) {
        event.preventDefault();
        window.history.pushState(null, null, event.target.href);

        getUrl(event.target.href);
    }
    async function getUrl(url) {
        const urlResponse = await fetch(url);
        const urlBody = await urlResponse.text();
        replaceUrl(urlBody)
    }
    function replaceUrl(corpo) {
        const newHtml = document.createElement('html');
        newHtml.innerHTML = corpo;
        const oldContent = document.body;
        const newContent = newHtml.querySelector('body');
        oldContent.innerHTML = newContent.innerHTML;
    }
    window.addEventListener('popstate', () => {
        getUrl(window.location.href);
    });
    
    links.forEach((link) => {
        link.addEventListener('click', handleClick);
    });
}