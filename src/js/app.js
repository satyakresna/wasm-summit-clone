import scrollContent from "./behaviours/scrollContent.js";
import clickHamburgerMenu from "./behaviours/clickHamburgerMenu.js";

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    scrollContent();

    clickHamburgerMenu();
  }
}