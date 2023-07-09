const input = document.querySelector('.input-box');
const search8tn = document.getElementById('.search8tn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city){
    const api_key = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch|('${url}').then(response => response.json());

    console.log(weather_data);
}

search8tn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});