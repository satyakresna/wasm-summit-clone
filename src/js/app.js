document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    page('/', index);
    // Call it!
    page();

    function index() {
      document.querySelector('main').textContent = 'Index';
    }

  }
}