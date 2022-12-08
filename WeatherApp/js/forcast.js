//Interacting with the API
const key = 'efjzZdLBFUlNFjBlnn2C1uvXm2Y9xfEq'; //API KEY

//get weather information
const getWeather = async (id) =>{ //param(location_id)
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`; //query paramenters to concat

    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);
}


//get city information
const getCity = async (city) =>{ //param(city_name)

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey= ${key}&q=${city}`; //query paramenters to concat

    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);
}

// getCity('manila').then((data)=>{
//     return getWeather(data.Key);
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });
