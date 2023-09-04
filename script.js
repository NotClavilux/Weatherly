document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "bd5e378503939ddaee76f12ad7a97608"; // Replace with your OpenWeatherMap API key

    const getWeatherButton = document.getElementById("getWeatherButton");
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");

    getWeatherButton.addEventListener("click", () => {
        const city = cityInput.value;

        if (!city) {
            alert("Please enter a city name.");
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const cityName = data.name;

                weatherInfo.innerHTML = `Weather in ${cityName}: ${description}, Temperature: ${temperature}°C`;
                weatherInfo.classList.add("fade-in");
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weatherInfo.innerHTML = "Unable to fetch weather data.";
                weatherInfo.classList.add("fade-in");
            });
    });
});
