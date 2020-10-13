let apiKey= "d65010f0ee255fc171c7d8183e8bf68a"
let city="London"
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

let day=document.querySelector("#day")
let hour=document.querySelector("#hour")
let minute=document.querySelector("#minute")
let temperature=document.querySelector("#temperature")
let min=document.querySelector("#min")
let max=document.querySelector("#max")
