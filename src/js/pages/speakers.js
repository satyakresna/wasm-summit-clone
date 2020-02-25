import renderNavbarBottom from "../components/renderNavbarBottom.js";
import renderNavbarPopup from "../components/renderNavbarPopup.js";
import speakers from "../../data/speakers.js";
import talks from "../../data/talks.js";

export default function (ctx) {
  document.body.textContent = '';
  const $div = document.createElement('div');
  $div.setAttribute('id', 'speakers');
  $div.setAttribute('class', 'grid');
  $div.setAttribute('style', 'place-items: center; padding: 6vh 25px 100px;');
  const fragment = document.createDocumentFragment();
  for (const speaker of speakers) {
    const $speaker = document.createRange().createContextualFragment(`
        <a class="m-0 cursor-pointer no-underline" style="color: rgba(255, 255, 255, 0.8);" href="/speakers/${speaker.speakerId}">
          <div class="speaker-card w-310px xl:w-390px" style="margin: 2.5% 1%; color: black; font-weight: normal; box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;
          border-radius: 20px; overflow: hidden; transition: all 300ms ease 0s;">
            <img src="${speaker.picture}" alt="picture of ${speaker.name}" width="390" height="390"/>
            <div class="speaker-card__speaker-name" style="color: white; margin: 0px; padding: 10px 15px; font-weight: normal; background-color: rgb(94, 51, 204);">
              <h1 class="text-2xl" style="display: inline-block;"><strong>${speaker.name}</strong></h1> ${speaker.hasOwnProperty('company') ? `<span style="color: white;" class="m-0 p-0 text-xl">${speaker.company}</span>` : ''}
            </div>
            <div class="speaker-card__speaker-summary" style="padding: 15px 30px 30px; background: rgb(32, 33, 96) none repeat scroll 0% 0%; height: 140px; line-height: 1.8; color: rgba(255, 255, 255, 0.8);">
              <h2 style="line-height: 1.4; font-weight: normal; margin: 0px; padding: 0px;" class="text-lg md:text-xl">${ talks[parseInt(speaker.speakerId) - 1].title}</h2>
            </div>
          </div>
        </a>
      `)
    fragment.appendChild($speaker);
  }
  $div.appendChild(fragment);
  const $content = document.createRange().createContextualFragment(`
        <div id="speakers-background" class="flex fixed inset-0" style="background-color: rgba(122, 122, 122, 0.15); z-index: -1;"></div>
        ${renderNavbarBottom()}
        ${renderNavbarPopup()}
        ${$div.outerHTML}
      `);
  document.body.appendChild($content);

  if (document.querySelector(`div#navbar-navitems > a[href="${ctx.path}"] > .navbar-button`) !== null) {
    document.querySelector(`div#navbar-navitems > a[href="${ctx.path}"] > .navbar-button`).classList.add('active'); 
  }
}