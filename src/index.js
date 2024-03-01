function updateWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let humidityElement=document.querySelector("#humidity");
  let windspeedElement=document.querySelector("#wind-speed");
  let currentdateElement=document.querySelector("#current-date");
  let date= new Date(response.data.time * 1000);

  currentdateElement.innerHTML=formatDate(date);
  windspeedElement.innerHTML='$(response.data.city.wind.speed)km/h';
  humidityElement.innerHTML='$(response.data.city.temperature.humidity)%';
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML=Math.round(temperature);
}
function formatDate(date) {
  let minutes= date.getMinutes();
  let hour=date.getHours();
  let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day=days[date.getDay()];

  return '${day} ${hour}:${minutes}';
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
