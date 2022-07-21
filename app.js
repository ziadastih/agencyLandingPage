const toggleMenu = document.querySelector(".toggle-menu");
const navLinks = document.querySelector(".links-container");
toggleMenu.addEventListener("click", function () {
  navLinks.classList.toggle("open-links");
});
