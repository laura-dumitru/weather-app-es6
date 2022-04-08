const apiKey = "e3dda97cfe9d9fc23a4b5fa7130913b1";

const temperatureElement = document.querySelector("#weather-temperature");
const cityElement = document.querySelector("#city");
const descriptionElement = document.querySelector("#description");
const humidityElement = document.querySelector("#humidity");

// const displayTemperature = (response) => {
function displayTemperature(response) {
  console.log(response.data.main.temp);

  let unit = "C";

  temperatureElement.innerHTML = `${Math.round(
    response.data.main.temp
  )}°${unit}`;

  cityElement.innerHTML = response.data.name;

  descriptionElement.innerHTML = response.data.weather[0].description;

  humidityElement.innerHTML = `${response.data.main.humidity}%`;
}

let city = "New York";

let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//console.log(apiURL);

axios.get(apiURL).then(displayTemperature);

// const displayFahrenheitTemperature = (event) => {
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (13 * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

const fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayFahrenheitTemperature);
