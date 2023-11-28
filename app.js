/* CELSIUS AND FAHRENHEIT LINKS */
function convertToFahrenheit(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temp-display");
  tempElement.innerHTML = 66;
}
function convertToCelsius(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temp-display");
  tempElement.innerHTML = 19;
}
let fahrenheit = document.querySelector("#fah-link");
fahrenheit.addEventListener("click", convertToFahrenheit);
let celsius = document.querySelector("#cel-link");
celsius.addEventListener("click", convertToCelsius);
/* CELSIUS AND FAHRENHEIT LINKS */
function displayWeather(response) {
  let tempElement = document.querySelector("#temp-display");
  let temperatureDisplay = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#todays-conditions");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let feelslikeElement = document.querySelector("#feels-like");
  let timeElement = document.querySelector("#day-time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector(".weather-app-icon");
  icon.setAttribute("src", `${response.data.condition.icon_url}`);

  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temperatureDisplay);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  feelslikeElement.innerHTML = `${response.data.temperature.feels_like}°C`;
  timeElement.innerHTML = formatDate(date);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}
function searchCity(city) {
  let apiKey = "8407bt42faf49cd402f3f3c8fo232de7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

function displayForecast() {
  let days = ["Tue", "wed", "Thur", "Fri", "Sat"];
  let forecastHtml = `<div class="row">`;
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div class="col-2">
      <div class="weather-forecast-date">
      ${day}
      </div>
      <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png" alt="weather-forecast-icon" width="36"><div class="weather-forecast-temp">
      <span class="weather-forecast-temp-max">18°</span>
      <span class="weather-forecast-temp-min">12°</span>
      </div>
      </div>
      `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastHtml = forecastHtml + `</div>`;
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form-element");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("London");
displayForecast();
