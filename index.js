const apiKey = "e3dda97cfe9d9fc23a4b5fa7130913b1";

const temperatureTile = document.querySelector("#temperature");
const temperatureContent = document.querySelector("#temperature p");

const iconPlayer = document.querySelector("#icon lottie-player");

const cityContent = document.querySelector("#city");

const descriptionContent = document.querySelector("#description");
const humidityContent = document.querySelector("#humidity");

const displayWeather = (response) => {
  const celcius = Math.round(response.data.main.temp);
  const fahrenheit = Math.round((celcius * 9) / 5 + 32);

  if (temperatureContent.innerHTML.endsWith("C")) {
    temperatureContent.innerHTML = `${fahrenheit}°F`;
  } else {
    temperatureContent.innerHTML = `${celcius}°C`;
  }

  const iconCode = response.data.weather[0].icon;
  iconPlayer.load(`img/${iconCode}.json`);

  cityContent.innerHTML = response.data.name;

  descriptionContent.innerHTML = response.data.weather[0].description;
  humidityContent.innerHTML = `${response.data.main.humidity}%`;
};

const showPosition = (position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;

  //let city = "Valencia";
  //apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeather);
};

const changeTemperature = () =>
  navigator.geolocation.getCurrentPosition(showPosition);

changeTemperature();

temperatureTile.addEventListener("click", changeTemperature);
