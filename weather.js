let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemp = Math.round(temperature);
  let fahrenTemp = Math.round((temperature * 9) / 5 + 32);
  alert(
    `It is currently ${celsiusTemp}/${fahrenTemp} in ${city} with a humidity of ${humidity}%.`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

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
  let feelslikeElememt = document.querySelector("#feels-like");
  let timeElement = document.querySelector("#day-time");
  let date = new Date(response.data.time * 1000);

  console.log(response.data);

  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temperatureDisplay);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  feelslikeElememt.innerHTML = `${response.data.temperature.feels_like}°C`;
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

let searchFormElement = document.querySelector("#search-form-element");
searchFormElement.addEventListener("submit", handleSearchSubmit);
