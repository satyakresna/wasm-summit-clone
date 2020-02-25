import scrollContent from "./behaviours/scrollContent.js";
import clickHamburgerMenu from "./behaviours/clickHamburgerMenu.js";
import Home from "./pages/home.js";
import Speakers from "./pages/speakers.js";
import Speaker from "./pages/speaker.js";
import Schedule from "./pages/schedule.js";
import About from "./pages/about.js";
import NotFound from "./pages/notfound.js";

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    page('/', Home);
    page('/speakers', Speakers);
    page('/speakers/:speaker', Speaker);
    page('/schedule', Schedule);
    page('/about', About);
    page('*', NotFound);
    // Call it
    page();

    scrollContent();

    clickHamburgerMenu();

    var current = window.location.pathname.replace('/', '');
    const links = document.querySelectorAll('div#navbar-navitems > a');
    
    for (let index = 0; index < links.length; index++) {
      const element = links[index];
      const href = element.getAttribute('href').replace('/', '');
      if (href.includes(current)) {
        element.querySelector('.navbar-button').classList.add('active');
      }
    }
  }
}