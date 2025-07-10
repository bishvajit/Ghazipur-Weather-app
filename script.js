const apiKey = '06961ed1610fdfd1eaae04ff4a385bbe'; 

    async function getWeather() {
      const lat = 30.4547;
      const lon =  78.0820;  
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather data not found');

        const data = await response.json();

        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

        const weatherHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <img src="${iconUrl}" alt="Weather Icon" />
          <p>🌡️ Temp: ${data.main.temp} °C</p>
          <p>🌥️ Weather: ${data.weather[0].main}</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById('weatherInfo').innerHTML = weatherHTML;
      } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `<p style="color: red;">${error.message}</p>`;
        Bishvajit 
      }
    }