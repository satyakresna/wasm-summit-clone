export default function clickHamburgerMenu() {
  document.querySelector('div#navbar-burgerbutton').addEventListener('click', (e) => {
    window.requestAnimationFrame(function () {
      let transform = document.getElementById('navbar-popup').style.transform;
      if (transform === "translateY(100%)") {
        e.target.innerHTML = '<path d\="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z\"></path>';
        document.getElementById('navbar-popup').style.transform = "translateY(0px)";
      } else {
        e.target.innerHTML = '<path d\="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z\"></path>';
        document.getElementById('navbar-popup').style.transform = "translateY(100%)";
      }
    })
  })
}