const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("primary-nav");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      navLinks.classList.remove("open");
      menuToggle.classList.remove("active");
    }
  });
}

