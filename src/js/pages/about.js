import renderNavbarBottom from "../components/renderNavbarBottom.js";
import renderNavbarPopup from "../components/renderNavbarPopup.js";
import about from "../../data/about.js";

export default function (ctx) {
  document.body.textContent = '';

  const $faq = document.createElement('div');
  $faq.setAttribute('style', 'break-inside: avoid;');
  const fragment = document.createDocumentFragment();
  for (const faq of about) {
    const $content = document.createRange().createContextualFragment(`
      <h2 class="text-3xl font-bold py-15px pr-15px pl-5px border-b-3 border-solid" style="border-bottom-color: rgba(255, 255, 255, 0.4);">${faq.question}</h2>
      <p class="text-lg mt-25px px-15px pb-50px leading-relaxed" style="text-shadow: rgba(0, 0, 0, 0.25) 1px 4px 10px;">${faq.answer}</p>
    `);
    fragment.appendChild($content);
  }
  $faq.appendChild(fragment);

  const $content = document.createRange().createContextualFragment(`
    <div class="flex fixed inset-0" style="background-color: rgba(122, 122, 122, 0.15); z-index: -1;"></div>
    ${renderNavbarBottom()}
    ${renderNavbarPopup()}
    <div style="padding: 3vh 9vw">
      <h1 class="text-5xl font-bold p-10px" style="margin-top: 3vh; margin-bottom: 0vh;">About</h1>
      <div style="columns: 500px auto; column-gap: 10vw;">
        ${$faq.outerHTML}
      </div>
    </div>
  `);
  document.body.appendChild($content);

  if (document.querySelector(`div#navbar-navitems > a[href="${ctx.path}"] > .navbar-button`) !== null) {
    document.querySelector(`div#navbar-navitems > a[href="${ctx.path}"] > .navbar-button`).classList.add('active'); 
  }
}