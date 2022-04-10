const apiKey = "e3dda97cfe9d9fc23a4b5fa7130913b1";

const temperatureElement = document.querySelector("#weather-temperature");

const iconElement = document.querySelector("#icon lottie-player");

const locationElement = document.querySelector("#location");
const cityElement = document.querySelector("#city");

const descriptionElement = document.querySelector("#description");
const humidityElement = document.querySelector("#humidity");

// const displayWeather = (response) => {
function displayWeather(response) {
  let unit = "C";

  temperatureElement.innerHTML = `${Math.round(
    response.data.main.temp
  )}°${unit}`;

  let iconCode = response.data.weather[0].icon;
  //console.log(iconCode);
  iconElement.setAttribute("src", `img/${iconCode}.json`);
  //console.log(iconElement);

  cityElement.innerHTML = response.data.name;

  descriptionElement.innerHTML = response.data.weather[0].description;

  humidityElement.innerHTML = `${response.data.main.humidity}%`;
}

//let showPosition = (position) => {
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;

  let city = "Budapest";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeather);
}

navigator.geolocation.getCurrentPosition(showPosition);

/*

// const displayFahrenheitTemperature = (event) => {
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (13 * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
*/
