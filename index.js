function getDate(timestamp){
let date= new Date(timestamp);
let hour= date.getHours();
let minute= date.getMinutes();
if (minute <10) {minute= `0${minute}`;}
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday" , "Friday", "Saturday"]
let day= days[date.getDay()];
 return `${day} ${hour}:${minute}`
}

function findWeather(response) { 
date.innerHTML= getDate(response.data.dt*1000);
let description=document.querySelector("#description");
description.innerHTML=response.data.weather[0].description;
let feelsLike = document.querySelector("#feels-like");
feelsLike.innerHTML=Math.round(response.data.main.feels_like);
let h1=document.querySelector("#city");
h1.innerHTML=response.data.name;
let humidity = document.querySelector("#humidity");
humidity.innerHTML=Math.round(response.data.main.humidity);
let max=document.querySelector("#max");
max.innerHTML=Math.round(response.data.main.temp_max);
let min=document.querySelector("#min");
min.innerHTML=Math.round(response.data.main.temp_min);
let temperature=document.querySelector("#temperature");
temperature.innerHTML= Math.round(response.data.main.temp);
let wind = document.querySelector("#wind");
wind.innerHTML=Math.round(response.data.wind.speed);
let icon = document.querySelector("#icon");
icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)

fahrTemp=response.data.main.temp;
}
function search(city){
 let apiKey= "d65010f0ee255fc171c7d8183e8bf68a"
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`   
axios.get(apiUrl).then(findWeather)
}

function handleSubmit(event){
  event.preventDefault();
  let cityElement = document.querySelector("#search-city");
search(cityElement.value);
}

function searchLocation(position) {
  let apiKey = "8eac7d0daaee5ecadb550cc3c656f342";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(findWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

function showFahr(event){
event.preventDefault();
let temperature=document.querySelector("#temperature");
temperature.innerHTML=Math.round(fahrTemp);


}
function showCelsius(event){
event.preventDefault();
let temperature=document.querySelector("#temperature");
let celsiusTemp=[fahrTemp-32]*5/ 9;
temperature.innerHTML=Math.round(celsiusTemp)
}

let fahrTemp=null;

let fahrLink =document.querySelector("#fahrenheit-link");
fahrLink.addEventListener("click", showFahr)

let celsiusTemp = null;
let celsiusLink =document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsius);

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Charleston");






