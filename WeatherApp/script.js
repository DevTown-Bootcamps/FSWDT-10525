const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherBox=document.querySelector('weather-box');
const weatherDetails=document.querySelector('.weather-details');
const error404=document.querySelector('.not-found');

search.addEventListener('click',()=>{
   const city=document.querySelector('.search-box input').value;
   const APIKey='41f1f14b48864e6fb9b114323251306';
   
   if(city == '') return;

   fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}`)
     .then(response => response.json())
     .then(json=>{
        if(json.error){
            container.style.height='400px';
            weatherBox.style.display='none';
            weatherDetails.style.display='none';
            error404.style.display='block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display='none';
        error404.classList.remove('fadeein');

        const image=document.querySelector('weather-box img');
        const temperature=document.querySelector('.weaather-box .temperature');
        const description=document.querySelector('weather-box .description');
        const wind=document.querySelector('.weather-info .wind span');

        image.src=`https:${json.current.condition.icon}`;

        temperature.innerHTML=`${json.current.condition.text}`;

        description.innerHTML=`${json.current.humidity}`;

        weatherBox.style.display='';
        weatherDetails.style.display='';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height='500px';
     }).catch(error=>{
        console.error('error fetching the data');
        container.style.height='400px';
        weatherBox.style.display='none';
        weatherDetails.style.display='none';
        error404.style.display='block';
        error404.classList.add('fadeIn');
     })
});
