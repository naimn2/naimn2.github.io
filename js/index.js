/**
 * initialization of navbar
 */

const navbar = document.querySelector('nav');
window.onscroll = function() {
  if (document.documentElement.scrollTop == 0) { // on scroll top
      navbar.classList.add('navbar-dark', 'bg-success');
      navbar.classList.remove('navbar-light', 'bg-white');
  } else { // not on scroll top
    navbar.classList.add('navbar-light', 'bg-white');
    navbar.classList.remove('navbar-dark', 'bg-success');
  }
};