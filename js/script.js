const modeToggleBtn = document.getElementById('mode-toggle');

modeToggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
/* End of change mode */
/* Start of hamburger menu */

document.addEventListener('DOMContentLoaded', function() {
  var hamburgerMenu = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');

  hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
});