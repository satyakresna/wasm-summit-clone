export default function () {
  return `<div id="navbar-popup" class="grid grid-cols-repeat fixed bottom-0 left-0 right-0 z-0 bg-midnight-blue" style="place-items: center; transition: all 150ms ease 0s; transform: translateY(100%); padding-bottom: 58px;">
  <a href="/speakers">
    <div class="navbar-popup-button flex flex-col justify-center items-center m-0 w-full border-2 border-solid border-transparent text-center" style="padding: 30px 2%; transition: all 150ms ease 0s; color: white;">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" size="30" style="margin:10px" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"></path></svg>
      <span class="navbar-popup-button-text" style="color: rgb(220, 220, 225);">Speakers</span>
    </div>
  </a>
  <a href="/schedule">
    <div class="navbar-popup-button flex flex-col justify-center items-center m-0 w-full border-2 border-solid border-transparent text-center" style="padding: 30px 2%; transition: all 150ms ease 0s; color: white;">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" size="30" style="margin:10px" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
      <span class="navbar-popup-button-text" style="color: rgb(220, 220, 225);">Speakers</span>
    </div>
  </a>
  <a href="/about">
    <div class="navbar-popup-button flex flex-col justify-center items-center m-0 w-full border-2 border-solid border-transparent text-center" style="padding: 30px 2%; transition: all 150ms ease 0s; color: white;">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" size="30" style="margin:10px" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg>
      <span class="navbar-popup-button-text" style="color: rgb(220, 220, 225);">About</span>
    </div>
  </a>
  <a href="/#">
    <div class="navbar-popup-button flex flex-col justify-center items-center m-0 w-full border-2 border-solid border-transparent text-center" style="padding: 30px 2%; transition: all 150ms ease 0s; color: white;">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" size="30" style="margin:10px" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
      <span class="navbar-popup-button-text" style="color: rgb(220, 220, 225);">About</span>
    </div>
  </a>
  <a href="/#">
    <div class="navbar-popup-button flex flex-col justify-center items-center m-0 w-full border-2 border-solid border-transparent text-center" style="padding: 30px 2%; transition: all 150ms ease 0s; color: white;">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" size="30" style="margin:10px" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
      <span class="navbar-popup-button-text" style="color: rgb(220, 220, 225);">About</span>
    </div>
  </a>
</div>`;
}