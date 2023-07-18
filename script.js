// Get the current page's URL
var currentPage = window.location.href;

// Get all the navigation links
var navLinks = document.querySelectorAll('.nav-links a');

// Check each link to see if it matches the current page
navLinks.forEach(function(link) {
  if (link.href === currentPage) {
    link.classList.add('active');
  }
});