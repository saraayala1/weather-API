function findWeather(response) { 
let description=document.querySelector("#description");
description.innerHTML=response.data.main.description;
let feelsLike = document.querySelector("#feels-like");
feelsLike.innerHTML=response.data.main.feels_like;
let h1=document.querySelector("#city");
h1.innerHTML=response.data.name;
let humidity = document.querySelector("#humidity");
humidity.innerHTML=response.data.main.humidity;
let max=document.querySelector("#max");
max.innerHTML=response.data.main.temp_max;
let min=document.querySelector("#min");
min.innerHTML=response.data.main.temp_min;
let temperature=document.querySelector("#temperature");
temperature.innerHTML= Math.round(response.data.main.temp);
let wind = document.querySelector("#wind")
wind.innerHTML=response.data.wind.speed
}
let apiKey= "d65010f0ee255fc171c7d8183e8bf68a"
let city="London"
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

axios.get(apiUrl).then(findWeather)

let day=document.querySelector("#day")
let hour=document.querySelector("#hour")
let minute=document.querySelector("#minute")




