import setActiveMenu from "../utils/setActiveMenu.js";

export default function (ctx) {
  import("./components/Speaker.js").then(module => {
    document.querySelector('main').appendChild(module.default(ctx));
  });

  setActiveMenu(ctx.path);
}