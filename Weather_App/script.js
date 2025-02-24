const apiKey = "b955b3b87cfb4078d298082edb696767"; // Replace with your OpenWeatherMap API key
const weatherResult = document.getElementById("weatherResult");

// Function to fetch weather data
async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        const data = await response.json();
        
        if (data.cod === 200) {
            weatherResult.innerHTML = `Temperature in ${city}: ${data.main.temp}°C`;
        } else {
            weatherResult.innerHTML = "City not found. Try again!";
        }
    } catch (error) {
        weatherResult.innerHTML = "Error fetching weather. Please try later.";
    }
}

// Event Listeners
document.getElementById("getWeather").addEventListener("click", function () {
    const cityDropdown = document.getElementById("cityDropdown").value;
    const cityInput = document.getElementById("cityInput").value.trim();

    const city = cityInput || cityDropdown; // Use input if entered, otherwise dropdown

    if (city) {
        weatherResult.innerHTML = "Fetching weather...";
        fetchWeather(city);
    } else {
        weatherResult.innerHTML = "Please select or enter a city!";
    }
});
