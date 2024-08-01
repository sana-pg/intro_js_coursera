function showweatherDetails(event) {
    event.preventDefault();
    const apiKey = '84686308efc6f3025bec6a8bbd7d71ee';
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main}</p>
                                    <p>Weather: ${data.weather}</p>`;
        })
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);