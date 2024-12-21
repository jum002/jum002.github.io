const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");
const dropdownButtonMobile = document.getElementById(
  "dropdownHoverButtonMobile"
);

// Toggle mobile menu visibility
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Toggle dropdown menu in mobile view
dropdownButtonMobile.addEventListener("click", () => {
  const dropdownMenu = document.getElementById("dropdownHoverMobile");
  dropdownMenu.classList.toggle("hidden");
});
