const APIKEY = "VSY3buYfkcOZGn4jcmEjoRQojV5EwLyS";


export const getCity = (cityName) => {
    return fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=VSY3buYfkcOZGn4jcmEjoRQojV5EwLyS&q=${cityName}`)
        .then(res => res.json())
};


export const getWeather = (cityCode) => {
    return fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityCode}?apikey=VSY3buYfkcOZGn4jcmEjoRQojV5EwLyS&metric=true`)
        .then(res => res.json())
};