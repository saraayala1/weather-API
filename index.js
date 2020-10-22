function getDate(timestamp){
let date= new Date(timestamp);
let hour= date.getHours();
let minute= date.getMinutes();
if (minute <10) {minute= `0${minute}`;}
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday" , "Friday", "Saturday"]
let day= days[date.getDay()];
 return `${day} ${hour}:${minute}`
}
function formatHours(timestamp){
  let date= new Date(timestamp);
  let hour= date.getHours();
  let minute= date.getMinutes();
  if (minute <10) {minute= `0${minute}`;}
  return `${hour}:${minute}`
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
fahrMin=response.data.main.temp_min;
fahrMax=response.data.main.temp_max;
fahrFeelsLike=response.data.main.feels_like;
}

function showForecast(response){
  let timeZero=document.querySelector("#time0")
  timeZero.innerHTML=formatHours(response.data.list[0].dt*1000)
  let tempZero = document.querySelector("#temp0");
  tempZero.innerHTML=Math.round(response.data.list[0].main.temp);
  let popZero = document.querySelector("#pop0");
  popZero.innerHTML=Math.round(100*(response.data.list[0].pop));
  let timeOne=document.querySelector("#time1")
  timeOne.innerHTML=formatHours(response.data.list[1].dt*1000)
  let tempOne = document.querySelector("#temp1");
  tempOne.innerHTML=Math.round(response.data.list[1].main.temp);
  let popOne = document.querySelector("#pop1");
  popOne.innerHTML=Math.round(100*(response.data.list[1].pop));
  let timeTwo=document.querySelector("#time2")
  timeTwo.innerHTML=formatHours(response.data.list[2].dt*1000)
  let tempTwo = document.querySelector("#temp2");
  tempTwo.innerHTML=Math.round(response.data.list[2].main.temp);
  let popTwo = document.querySelector("#pop2");
  popTwo.innerHTML=Math.round(100*(response.data.list[2].pop));
  let timeThree=document.querySelector("#time3")
  timeThree.innerHTML=formatHours(response.data.list[3].dt*1000)
  let tempThree = document.querySelector("#temp3");
  tempThree.innerHTML=Math.round(response.data.list[3].main.temp);
  let popThree = document.querySelector("#pop3");
  popThree.innerHTML=Math.round(100*(response.data.list[3].pop));
}

function search(city){
let apiKey= "d65010f0ee255fc171c7d8183e8bf68a"
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`   
axios.get(apiUrl).then(findWeather)

let apiFKey ="8eac7d0daaee5ecadb550cc3c656f342"
let forecastUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiFKey}&units=imperial`
axios.get(forecastUrl).then(showForecast)
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
let feelsLike=document.querySelector("#feels-like");
feelsLike.innerHTML=Math.round(fahrFeelsLike);
let min=document.querySelector("#min");
min.innerHTML=Math.round(fahrMin);
let max=document.querySelector("#max");
max.innerHTML=Math.round(fahrMax);


}
function showCelsius(event){
event.preventDefault();
let temperature=document.querySelector("#temperature");
let celsiusTemp=[fahrTemp-32]*5/ 9;
temperature.innerHTML=Math.round(celsiusTemp);
let feelsLike=document.querySelector("#feels-like");
let celsiusFeelsLike=[fahrFeelsLike-32]*5/9;
feelsLike.innerHTML=Math.round(celsiusFeelsLike);
let min=document.querySelector("#min");
let celsiusMin=[fahrMin-32]*5/9;
min.innerHTML=Math.round(celsiusMin);
let max=document.querySelector("#max");
let celsiusMax=[fahrMax-32]*5/9;
max.innerHTML=Math.round(celsiusMax);

} 
let fahrFeelsLike=null;
let fahrMax=null;
let fahrMin=null;
let fahrTemp=null;
let fahrLink =document.querySelector("#fahrenheit-link");
fahrLink.addEventListener("click", showFahr)

let celsiusFeelsLike=null;
let celsiusMax=null;
let celsiusMin=null;
let celsiusTemp = null;
let celsiusLink =document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsius);

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);





search("Charleston");






