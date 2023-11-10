/* CURRENT DAY AND TIME */
let time = document.querySelector(".day-time");
let now = new Date();
let year = now.getFullYear();
let hours = now.getHours();
let mins = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

time.innerHTML = `${day} ${hours}:${mins}`;
/* CURRENT DAY AND TIME */

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

function displayWeather(response) {
  console.log(response.data);
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

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  console.log(searchInput);
}

let searchFormElement = document.querySelector("#search-form-element");
searchFormElement.addEventListener("submit", handleSearchSubmit);
