const APIKEY = import.meta.env.WEATHER_API_KEY;

export const getCity = (cityName) => {
    return fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKEY}&q=${cityName}`)
        .then(res => res.json())
};


export const getWeather = (cityCode) => {
    return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityCode}?apikey=${APIKEY}&metric=true&details=true`)
        .then(res => res.json())
};

export const fetchSuggestions = (input) => {
    return fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${input}`)
        .then(res => res.json())
}