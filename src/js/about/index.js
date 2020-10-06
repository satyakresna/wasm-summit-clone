import setActiveMenu from "../utils/setActiveMenu.js";

export default function (ctx) {
  import("./components/About.js").then(module => {
    document.querySelector('main').appendChild(module.default());
  });
  setActiveMenu(ctx.path);
}