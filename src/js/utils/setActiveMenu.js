export default function (path) {
    Array.from(document.querySelectorAll(`div#navbar-navitems > div.navbar-button`)).forEach(el => {
        if (el.querySelector('a').getAttribute('href') === path) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');            
        }
    });
}