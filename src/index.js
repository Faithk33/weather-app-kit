function searchCity(event) {
  event.PreventDefault();
  let searchInput = document.querySelector("#search-input");
  console.log(searchInput.value);
}
let searchInputElement = document.querySelector("#search-form");
searchInputElement.addEventListener("submit", searchCity);
