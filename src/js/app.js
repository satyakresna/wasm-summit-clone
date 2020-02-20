import scrollContent from "./behaviours/scrollContent.js";
import clickHamburgerMenu from "./behaviours/clickHamburgerMenu.js";
import Home from "./pages/home.js";
import Speaker from "./pages/speaker.js";
import Schedule from "./pages/schedule.js";
import About from "./pages/about.js";
import NotFound from "./pages/notfound.js";

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    page('/', Home);
    page('/speakers', Speaker);
    page('/schedule', Schedule);
    page('/about', About);
    page('*', NotFound);
    // Call it
    page();

    scrollContent();

    clickHamburgerMenu();
  }
}