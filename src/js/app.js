import page from "page";
import scrollContent from "./utils/scrollContent.js";
import clickHamburgerMenu from "./utils/clickHamburgerMenu.js";
import Home from "./home/index.js";
import Speakers from "./speakers/index.js";
import Speaker from "./speaker/index.js";
import Schedules from "./schedules/index.js";
import About from "./about/index.js";
import NotFound from "./notfound.js";

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    page('/', Home);
    page('/speakers', Speakers);
    page('/speakers/:speaker', Speaker);
    page('/schedules', Schedules);
    page('/about', About);
    page('*', NotFound);
    // Call it
    page();

    scrollContent();

    clickHamburgerMenu();
  }
}