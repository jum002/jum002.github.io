const navbar = document.getElementById("navbar");
const navbarText = document.querySelector("h1.navbar-text");
const navbarLinks = document.querySelectorAll(".navbar-link");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-md");
    navbar.classList.remove("bg-transparent");
    navbarText.classList.remove("text-white");
    navbarText.classList.add("text-gray-800");
    navbarLinks.forEach((link) => {
      link.classList.remove("text-white");
      link.classList.add("text-gray-800");
    });
  } else {
    navbar.classList.remove("bg-white", "shadow-md");
    navbar.classList.add("bg-transparent");
    navbarText.classList.remove("text-gray-800");
    navbarText.classList.add("text-white");
    navbarLinks.forEach((link) => {
      link.classList.remove("text-gray-800");
      link.classList.add("text-white");
    });
  }
});

// Initialize navbar with transparency and white text
window.addEventListener("load", () => {
  navbar.classList.add("bg-transparent");
  navbarText.classList.add("text-white");
  navbarLinks.forEach((link) => link.classList.add("text-white"));
});
