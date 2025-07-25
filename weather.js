const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = '41f1f14b48864e6fb9b114323251306';
    const city = document.querySelector('.search-box input').value;

    if (city === '') return;

    fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}`)
        .then(response => response.json())
        .then(json => {
            if (json.error) {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-info .humidity span');
            const wind = document.querySelector('.weather-info .wind span');

            // Set weather icon
            image.src = `https:${json.current.condition.icon}`;
            
            // Set temperature
            temperature.innerHTML = `${parseInt(json.current.temp_c)}<span>°C</span>`;
            
            // Set weather description
            description.innerHTML = `${json.current.condition.text}`;
            
            // Set humidity
            humidity.innerHTML = `${json.current.humidity}%`;
            
            // Set wind speed
            wind.innerHTML = `${parseInt(json.current.wind_kph)} Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
        });
}); 