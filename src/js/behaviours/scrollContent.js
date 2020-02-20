export default function scrollContent() {
  let prevScrollPos = window.scrollY;
  window.addEventListener('scroll', function (e) {
    window.requestAnimationFrame(function() {
      let currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        document.getElementById('navbar-bottom').style.cssText = "transform: none; transition: all 150ms ease 0s;";
      } else {
        document.getElementById('navbar-bottom').style.cssText = "transform: translateY(100%); transition: all 150ms ease 0s;";
      }
      prevScrollPos = currentScrollPos;
    })
  })
}