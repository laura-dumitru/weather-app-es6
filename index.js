const apiKey = "e3dda97cfe9d9fc23a4b5fa7130913b1";

const temperatureTileElement = document.querySelector("#temperature");
const temperatureElement = document.querySelector("#temperature p");

const iconElement = document.querySelector("#icon lottie-player");

const locationElement = document.querySelector("#location");
const cityElement = document.querySelector("#city");

const descriptionElement = document.querySelector("#description");
const humidityElement = document.querySelector("#humidity");

const convertTemperature = (celcius) => (celcius * 9) / 5 + 32;

//function displayWeather(response) {
const displayWeather = (response) => {
  let temperature;
  if (temperatureElement.innerHTML.endsWith("C")) {
    const fahrenheitTemperature = convertTemperature(response.data.main.temp);
    temperature = `${Math.round(fahrenheitTemperature)}°F`;
  } else {
    temperature = `${Math.round(response.data.main.temp)}°C`;
  }
  temperatureElement.innerHTML = temperature;

  iconElement.load(`img/${response.data.weather[0].icon}.json`);

  cityElement.innerHTML = response.data.name;

  descriptionElement.innerHTML = response.data.weather[0].description;

  humidityElement.innerHTML = `${response.data.main.humidity}%`;
};

//function showPosition(position) {
const showPosition = (position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;

  //let city = "Valencia";
  //apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeather);
};

const changeTemperature = (event) => {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
};

navigator.geolocation.getCurrentPosition(showPosition);

temperatureTileElement.addEventListener("click", changeTemperature);
