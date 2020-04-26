import NavbarBottom from "../components/NavbarBottom.js";
import NavbarPopup from "../components/NavbarPopup.js";
import speakers from "../data/speakers.js";
import talks from "../data/talks.js";

export default function (ctx) {
  let selectedSpeaker;
  let selectedTalk;
  for (const speaker of speakers) {
    if (speaker.speakerId == ctx.params.speaker) {
      selectedSpeaker = speaker;
    }
  }
  for (const talk of talks) {
    if (talk.speakerId === ctx.params.speaker) {
      selectedTalk = talk;
    }
  }
  document.body.textContent = '';
  const $content = document.createRange().createContextualFragment(`
    <div class="flex fixed inset-0" style="z-index: -1; padding: 25px; background-color: rgba(122, 122, 122, 0.15);"></div>
    <div class="flex flex-row" style="padding: 3vh 3vw; color: white; min-height: calc(-65px + 100vh); align-items: center; justify-content: center;">
      <div class="flex flex-row flex-wrap" style="justify-content: center; align-items: flex-start;">
        <div id="speaker-box" class="flex flex-col" style="margin-top: 0vh; margin-bottom: 2vh; margin-right: 0px; padding-top: 0px;">
          <a class="m-0 cursor-pointer no-underline" style="color: rgba(255, 255, 255, 0.8);" href="${selectedSpeaker.website}" target="_blank">
            <div class="speaker-card w-310px xl:w-390px" style="margin: 2.5% 1%; color: black; font-weight: normal; box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 20px;
            border-radius: 20px; overflow: hidden; transition: all 300ms ease 0s;">
              <img src="${selectedSpeaker.picture}" alt="picture of ${selectedSpeaker.name}" width="390" height="390"/>
              <div class="speaker-card__speaker-name" style="color: white; margin: 0px; padding: 10px 15px; font-weight: normal; background-color: rgb(94, 51, 204);">
                <h1 class="text-2xl" style="display: inline-block;"><strong>${selectedSpeaker.name}</strong></h1> ${selectedSpeaker.hasOwnProperty('company') ? `<span style="color: white;" class="m-0 p-0 text-xl">${selectedSpeaker.company}</span>` : ''}
              </div>
              <div class="speaker-card__speaker-summary" style="padding: 15px 30px 30px; background: rgb(32, 33, 96) none repeat scroll 0% 0%; line-height: 1.8; color: rgba(255, 255, 255, 0.8);">
                <div class="flex justify-end">
                  <div style="padding: 0px 10px; margin-top: 10px;">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" size="32" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div id="section" style="break-inside: avoid; flex: 1 1 0%; margin: 1vh 3vw 0vh; max-width: 1024px;">
          <h2 style="font-size: 1.8em; margin: 0px 25px 0px 0px; padding: 15px; font-weight: 700; border-bottom: 3px solid rgba(255, 255, 255, 0.4); text-shadow: rgba(18, 25, 161, 0.3) 2px 4px 5px;">${selectedTalk.title}</h2>
          ${ selectedTalk.hasOwnProperty('abstract') ? 
          `<p style="font-size: 1.2em; margin: 0px; padding: 15px 15px 50px 25px; line-height: 1.8; color: rgba(255, 255, 255, 0.9); text-shadow: rgba(0, 0, 0, 0.25) 1px 4px 10px; font-weight: normal;">${selectedTalk.abstract}</p>` : ''}
        </div>
      </div>
    </div>
    ${NavbarBottom()}
    ${NavbarPopup()}`);
  document.body.appendChild($content);

  if (document.querySelector(`div#navbar-navitems > a[href="${ctx.path}"] > .navbar-button`) !== null) {
    document.querySelector(`div#navbar-navitems > a[href="${ctx.path}"] > .navbar-button`).classList.add('active'); 
  }
}