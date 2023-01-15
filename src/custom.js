// Toggle menu

// Search Item
let searchButton = document.querySelector(".toggle-search-button");
let closeSearch = document.querySelector(".close-search");
let search = document.querySelector(".toggle-search");
let searchInput = document.querySelector("#search-input");

searchButton.addEventListener("click", () => {
  search.classList.toggle("hidden");
});

closeSearch.addEventListener("click", () => {
  search.classList.toggle("hidden");
});

searchInput.addEventListener("click", () => {
  search.classList.toggle("hidden");
});

// Humbugger Item
let button = document.querySelector("#toggle-menu-button");
let closeButton = document.querySelector("#close-menu");
let menu = document.querySelector("#toggle-menu");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Filter
let filterButton = document.querySelector(".toggle-filter");
let closeFilter = document.querySelector(".close-filter");
let filter = document.querySelector(".filter");

filterButton.addEventListener("click", () => {
  filter.classList.toggle("hidden");
});

closeFilter.addEventListener("click", () => {
  filter.classList.toggle("hidden");
});

// Top New Sorting
let activeNew = document.querySelector("#active-new");
let activeTop = document.querySelector("#active-top");

activeNew.addEventListener("click", () => {
  activeTop.classList.remove("active-sort");
  activeTop.classList.add("inactive-sort");
  activeNew.classList.add("active-sort");
  activeNew.classList.remove("inactive-sort");
});

activeTop.addEventListener("click", () => {
  activeNew.classList.remove("active-sort");
  activeNew.classList.add("inactive-sort");
  activeTop.classList.add("active-sort");
  activeTop.classList.remove("inactive-sort");
});

// Share
let shareButton = document.querySelector(".share-button");
let shareClose = document.querySelector(".share-close");
let sharePopup = document.querySelector(".share-popup");

shareButton.addEventListener("click", () => {
  sharePopup.classList.toggle("hidden");
});

shareClose.addEventListener("click", () => {
  sharePopup.classList.toggle("hidden");
});

/* Sliders */
splide = new Splide("#slider1", {
  arrows: false,
  perPage: 6,
  type: "loop",
  pagination: false,
  keyboard: false,
  slideFocus: false,
}).mount();
splide = new Splide("#slider2", {
  arrows: false,
  perPage: 3.5,
  type: "loop",
  pagination: false,
  keyboard: false,
  slideFocus: false,
}).mount();

splide.on("move", function () {
  var slides = document.querySelectorAll(".splide .splide__slide");

  slides.forEach(function (slide) {
    slide.classList.add("is-visible");
  });
});

// Read More Button

function readMoreBtn() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("toggle");

  if (showMoreBg.style.display === "none") {
    showMoreBg.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    showMoreBg.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
