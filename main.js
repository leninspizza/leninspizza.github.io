const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

// Initialize and add the map
function initMap() {
  // The location of Gemeindebüro Tiddische
  const gemeindebüro = { lat: 52.520442765266374, lng: 10.807354975862365 };
  // The map, centered at Gemeindebüro Tiddische
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: gemeindebüro,
  });
  // The marker, positioned at Gemeindebüro Tiddische
  const marker = new google.maps.Marker({
    position: gemeindebüro,
    map: map,
  });
}

window.initMap = initMap;

// const slider = new A11YSlider(document.querySelector(".slider"), {
//   adaptiveHeight: false,
//   dots: true,
//   centerMode: true,
//   arrows: false,
//   responsive: {
//     480: {
//       dots: false, // dots enabled 1280px and up
//     },
//   },
// });