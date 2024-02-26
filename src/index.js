function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-info");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}
let searchInputElement = document.querySelector("#search-form");
searchInputElement.addEventListener("submit", searchCity);
