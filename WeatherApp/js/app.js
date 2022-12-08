//DOM Manipulations and Event Handling
const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details')
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) =>{
    const cityDetails = data.cityDetails;
    const weather = data.weather;

    //update details template
    details.innerHTML = `
        <h5 class="my-3"> ${cityDetails.EnglishName} </h5>
        <div class="my-3"> ${weather.WeatherText} </div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //Remove d-none class to display data
    card.classList.remove('d-none');

    //update night/day & icons
    let timeSrc = null;
    let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

    if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
    } else{
        timeSrc = 'img/night.svg';
    }

    time.setAttribute('src', timeSrc);
    icon.setAttribute('src', iconSrc);

};

const updateCity = async (city)=>{
    //getCity() and getWeather() is in forcast.js
    const cityDetails = await getCity(city); 
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    };
}

cityForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim(); //fetch the form value of w/ the name='city', trim removes white space
    cityForm.reset(); //clear all form fields

    //Update UI
    updateCity(city).then((data)=>{
        updateUI(data);
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    });
});