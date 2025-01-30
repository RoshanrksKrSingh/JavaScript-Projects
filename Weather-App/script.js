const input = document.getElementById("input");
const btn = document.getElementById("btn");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const container = document.querySelector(".container");
const locatioNtFoud = document.querySelector(".locatioNtFoud");
const weatherBody = document.querySelector(".weatherBody");
const weatherImg = document.querySelector(".weatherImg");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");
//Make a asynchronus function for finding live api weather data.
async function checkWeather (city){
    //copy apikey and api url from website and paste.
    const api_key='fce91ea0bded70b8efe1a75ae91fba70';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weatherData= await fetch(`${url}`).then(response=>response.json());
    //console log to check api are working or not?
    console.log(weatherData);
    //condition for wrong input like wrong city names.
    if(weatherData.cod === '404'){
        //show error image.
        locatioNtFoud.style.display='flex';
        //hide body image.
        weatherBody.style.display="none";
        return;
    }
    //show body image and hide error image.
    locatioNtFoud.style.display="none";
    weatherBody.style.display="flex";
    //display weather data
    temprature.innerHTML=`${Math.round (weatherData.main.temp-273.15)}°C`;
    description.innerHTML=`${weatherData.weather[0].description}`;
    humidity.innerHTML=`${weatherData.main.humidity}%`;
    windSpeed.innerHTML=`${weatherData.wind.speed}Km/H`;
    //conditions to display image according to data.
    switch(weatherData.weather[0].main){
        case 'Clear':
            weatherImg.src="clear.png";
            break;
        case 'Clouds':
            weatherImg.src="cloud.png";
            break;
        case 'Drizzle':
            weatherImg.src="drizzle.png";
            break;
        case 'Fog':
            weatherImg.src="fog.png";
            break;
        case 'Haze':
            weatherImg.src="haze.png";
            break;
        case 'Mist':
            weatherImg.src="mist.png";
            break;
        case 'Rain':
            weatherImg.src="rain.png";
            break;
        case 'Smoke':
            weatherImg.src="smoke.png";
            break;
        case 'Snow':
            weatherImg.src="snow.png";
            break;
    }
}
//Add click listner for input value.
btn.addEventListener("click",()=>{
    //calling async function
    checkWeather(input.value);
    container.style.background="rgba(0, 0, 0, 0.5)";
    container.style.transition="background-color 0.5s ease";
});
