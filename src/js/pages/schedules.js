import setActiveMenu from "../behaviours/setActiveMenu.js";

export default function (ctx) {
  import("../components/Schedules.js").then(module => {
    document.querySelector('main').appendChild(module.default());
  });

  setActiveMenu(ctx.path);
}