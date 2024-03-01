function updateWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}
function displayCity(city) {
  let apiKey ="72bb9dab46b9ec3d65f423c63f27a9b8";
  let apiUrl =
    https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric;
  axios.get(apiUrl).then(updateWeather);
}
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-info");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  displayCity(searchInput.value);
}
let searchInputElement = document.querySelector("#search-form");
searchInputElement.addEventListener("submit", searchCity);

searchCity("Paris")
