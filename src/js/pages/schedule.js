import NavbarBottom from "../components/NavbarBottom.js";
import NavbarPopup from "../components/NavbarPopup.js";
import schedule from "../data/schedule.js";

export default function (ctx) {
  document.body.textContent = '';
  const $ul = document.createElement('ul');
  $ul.setAttribute('class', 'schedule mx-auto list-none p-0');
  $ul.setAttribute('style', 'margin-top: 25px; max-width: 900px;');
  const fragment = document.createDocumentFragment();
  for (const schedules of schedule) {
    const $li = document.createRange().createContextualFragment(`
      <li class="flex pl-10px">
        <p style="color: rgb(255, 255, 255); margin: -1px calc(5px + 2vw) 0px 0px;" class="w-60px">${schedules.time}</p>
        <div style="border: 3px solid white; border-radius: 100%; margin-right: -8px; background: rgb(73, 78, 171) none repeat scroll 0% 0%; width: 16px; height: 16px;"></div>
        <div style="break-inside: avoid; max-width: 900px; flex: 1 1 0%; padding-left: calc(10px + 3vw); margin-top: 1em; margin-bottom: 1em; margin-left: -1px; border-left: 2px dashed rgba(255, 255, 255, 0.15);">
          ${schedules.hasOwnProperty('link') ? 
            `<a href="${schedules.link}" class="hover:underline">
              <h2 style=" text-shadow: rgba(18, 25, 161, 0.3) 2px 4px 5px;" class="my-10px text-xl">${schedules.title}</h2>
              <p class="font-bold pr-15px text-2xl mt-0" style="text-shadow: rgba(18, 25, 161, 0.3) 2px 4px 5px;">${schedules.description}</p>
            </a>` : 
            `<h2 style="margin-top: 5px; text-shadow: rgba(18, 25, 161, 0.3) 2px 4px 5px;" class="text-2xl">${schedules.title}</h2>`
          }
        </div>
      </li>
    `);

    fragment.appendChild($li);
  }
  $ul.appendChild(fragment);
  const $content = document.createRange().createContextualFragment(`
    <div id="schedule-background" class="flex fixed inset-0" style="background-color: rgba(122, 122, 122, 0.15); z-index: -1;"></div>
    ${NavbarBottom()}
    ${NavbarPopup()}
    <div id="schedule" style="padding: 3vh 9vw;">
      <h1 class="text-center text-5xl" style="margin-top: 3vh; margin-bottom: 0vh;"><strong>Schedule</strong></h1>
      ${$ul.outerHTML}
    </div>
  `);
  document.body.appendChild($content);

  if (document.querySelector(`div#navbar-navitems > a[href="${ctx.path}"] > .navbar-button`) !== null) {
    document.querySelector(`div#navbar-navitems > a[href="${ctx.path}"] > .navbar-button`).classList.add('active'); 
  }
}