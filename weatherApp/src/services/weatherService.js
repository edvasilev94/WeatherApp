const APIKEY = "VSY3buYfkcOZGn4jcmEjoRQojV5EwLyS";


export const getCity = (cityName) => {
    return fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKEY}&q=${cityName}`)
        .then(res => res.json())
};


export const getWeather = (cityCode) => {
    return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityCode}?apikey=${APIKEY}&metric=true&details=true`)
        .then(res => res.json())
};