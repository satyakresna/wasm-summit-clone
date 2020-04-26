import setActiveMenu from "../behaviours/setActiveMenu.js";

export default function (ctx) {
  document.querySelector('main').textContent = '';
  const $content = document.createRange().createContextualFragment(`<div id="page-view" class="flex items-center justify-center" style="min-height: calc(100vh); background: rgba(0, 0, 0, 0) linear-gradient(rgba(49, 51, 196, 0) 20%, rgb(49, 51, 196) 70%) repeat scroll 0% 0%">
  <div id="pages-container" class="flex flex-col justify-center items-center p-0" style="margin-top: 3vw; margin-bottom: 60px;">
    <div id="pages-hero" class="grid items-end content-center">
      <img id="pages-logo" src="/assets/summit-logo.svg" alt="WebAssembly Summit Logo" class="max-w-full" style="width: 1280px;">
      <div id="pages-title" style="margin: 5px 0px 3.5vh;">
        <h1 id="pages-headline" class="leading-tight font-normal text-5xl" style="text-shadow: rgba(0, 0, 0, 0.25) 1px 4px 10px; margin: 20px 0; letter-spacing: 5px;">
          WebAssembly
          <br>
          Summit
        </h1>
        <h3 id="pages-subheadline" class="text-base md:text-xl m-0 font-medium leading-relaxed" style="color: rgba(255, 255, 255, 0.75); text-shadow: rgba(0, 0, 0, 0.25) 1px 4px 10px;">
          <span style="color: white;" class="text-xl md:text-2xl">February 10</span>, 2020
          <br>
          <span style="color: white;" class="text-xl md:text-2xl">Google</span>, 1625 Plymouth St
          <br>
          <span style="color: white;" class="text-xl md:text-2xl">Mountain View</span> CA
        </h3>
      </div>
    </div>
    <div id="pages-oneliner" class="text-xl text-left leading-relaxed" style="color: rgba(255, 255, 255, 0.75); text-shadow: rgba(0, 0, 0, 0.25) 1px 4px 10px; margin-top: 1vw; max-width: 768px;">
      A
      <span style="color: white;">one day, single track</span>
      , conference about
      <span style="color: white;">all things</span> WebAssembly.
    </div>
    <div id="pages-call-to-action" style="margin: 10px auto;" class="text-center">
      <a href="#" class="pages__button text-2xl bg-dark-blue bg-repeat bg-scroll rounded inline-block" style="color: white; transition: all 0.1s ease 0s; box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 10px;">Watch the recording</a>
      <a href="#" class="pages__button text-2xl bg-dark-blue bg-repeat bg-scroll rounded inline-block" style="color: white; transition: all 0.1s ease 0s; box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 10px;">See the photos</a>
    </div>
  </div>
</div>`);
  document.querySelector('main').appendChild($content);

  setActiveMenu(ctx.path);
}