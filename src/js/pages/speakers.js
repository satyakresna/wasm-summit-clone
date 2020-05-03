
import setActiveMenu from "../behaviours/setActiveMenu.js";

export default function (ctx) {
  import("../components/Speakers.js").then(module => {
    document.querySelector('main').appendChild(module.default());
  })

  setActiveMenu(ctx.path);
}