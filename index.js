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

search("Charleston");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);








