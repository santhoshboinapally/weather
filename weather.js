const cityName = document.querySelector("#search");
const myButton = document.getElementById("my-button");
const para = document.getElementById("city");
const currentCountry = document.getElementById("country");
let temperature = document.querySelector("#temp");
let sky = document.querySelector("#sky");
const sunriseDOM = document.querySelector("#sunrise");
const sunsetDOM = document.querySelector("#sunset");
const d = new Date();
let windSpeed = document.querySelector("#wind-speed");

function getWeather() {
    const key = "411e686c9b09db44b2a938dd676b7efe";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${key}&units=Metric`;
    fetch(url)
        .then((resp) => resp.json())
        .then(displayWeather);
}
const getCity = (event) => {
    console.log(cityName.value);
    getWeather();
};
myButton.addEventListener("click", getWeather);

function displayWeather(data) {
    para.innerHTML = data.name;
    document.getElementById("date").innerHTML = d.toDateString();
    currentCountry.innerHTML = data.sys.country;
    temperature.innerHTML = `${Math.round(data.main.temp)} °C `;
    const { sunrise, sunset } = data.sys;
    const sunriseGMT = new Date(sunrise * 1000);
    const sunsetGMT = new Date(sunset * 1000);
    sunriseDOM.textContent = `Sunrise : ${sunriseGMT.toLocaleTimeString()}`;
    sunsetDOM.textContent = `Sunset: ${sunsetGMT.toLocaleTimeString()}`;
    windSpeed.textContent = `wind speed : ${data.wind.speed}`;
    sky.textContent = `${data.weather[0].description}`;
    console.log(data.weather[0].description);
}