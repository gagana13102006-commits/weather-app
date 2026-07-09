async function getWeather(){

const city=document.getElementById("city").value;

const apiKey="201625850b222b1bb0b998c947f50549";

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response=await fetch(url);

const data=await response.json() 
console.log(data);

document.getElementById("weather").innerHTML=`

<h2>${data.name}</h2>

<p>🌡 Temperature: ${data.main.temp} °C</p>

<p>☁ Weather: ${data.weather[0].main}</p>

<p>💧 Humidity: ${data.main.humidity}%</p>

<p>💨 Wind Speed: ${data.wind.speed} m/s</p>

`;

}

catch(error){

document.getElementById("weather").innerHTML="City not found";

}

}