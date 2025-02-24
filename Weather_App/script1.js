const apiKey = "b955b3b87cfb4078d298082edb696767"; // Replace with your OpenWeatherMap API key
const weatherResult=document.getElementById("weatherResult");

async function fetchweather(city){
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        
    
    const data= await response.json();
    if(data.cod===200)
    {
        weatherResult.innerHTML= `Temperature of ${city}: ${data.main.temp}°C`; 
    }
    else{
        weatherResult.innerHTML="City not found , please try again"
    }
}
catch(error){
    weatherResult.innerHTML="Error in fetching the data.Please try again"
}
}

document.getElementById("getWeather").addEventListener("click", function(){
    const cityDropdown=document.getElementById("cityDropdown").value;
    const cityInput= document.getElementById("cityInput").value.trim();
    const city= cityInput || cityDropdown;
    if(city){
        weatherResult.innerHTML=("Fetching the weather data.....");
        fetchweather(city);
    }
    else{
        weatherResult.innerHTML=("Please select a city");
    }


});