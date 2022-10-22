const pageHeader = document.querySelector(".header");
const openMobMenu = document.querySelector(".open-mobile-menu");
const closeMobMenu = document.querySelector(".close-mobile-menu");
const topMenuWrapper = document.querySelector(".top-menu-wrapper");
const isVisible = "is-visible";
const showOffCanvas = "show-offcanvas";
const noTransition = "no-transition";
let resize;

// Opening Mobile Menu
openMobMenu.addEventListener("click", () => {
  topMenuWrapper.classList.add(showOffCanvas);
});

// Closing Mobile Menu
closeMobMenu.addEventListener("click", () => {
  topMenuWrapper.classList.remove(showOffCanvas);
});

// Resizing Screen
window.addEventListener("resize", () => {
  pageHeader.querySelectorAll("*").forEach(function(el) {
    el.classList.add(noTransition);
  });
  clearTimeout(resize);
  resize = setTimeout(resizingComplete, 500);
});

function resizingComplete() {
  pageHeader.querySelectorAll("*").forEach(function(el) {
    el.classList.remove(noTransition);
  });
}