function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `${days[date.getDay()]} ${hours}:${minutes}`;
}

function showTemperature(response) {
  console.log(response);
  let cityElement = document.querySelector("#city");
  let countryElement = document.querySelector("#country");
  let currentTemperature = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let windElement = document.querySelector("#wind");
  let humidityElement = document.querySelector("#humidity");
  let pressureElement = document.querySelector("#pressure");
  let dateElement = document.querySelector("#date");
  countryElement.innerHTML = response.data.sys.country;
  cityElement.innerHTML = response.data.name;
  currentTemperature.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  pressureElement.innerHTML = response.data.main.pressure;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "e330f70bea90351a337b95917ee9d746";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Enugu&appid=${apiKey}&units=metric
`;
axios.get(apiUrl).then(showTemperature);
