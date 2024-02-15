import {useState, useEffect} from "react";
import * as weatherService from "../../services/weatherService";

export default function Card() {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    const [cityCode, setCityCode] = useState();

    useEffect(() => {
        weatherService.getCity("Berlin")
            .then(result => {
                setCity(result);
                setCityCode(result[0]?.Key); 
            })
            .catch(error => {
                console.error("Error fetching city:", error);
            });
    }, []);

    useEffect(() => {
        if (cityCode) {
            weatherService.getWeather(cityCode)
                .then(result => {
                    setWeather(result);
                })
                .catch(error => {
                    console.error("Error fetching weather:", error);
                });
        }
    }, [cityCode]); 

    return (
        <>
            <h3>City Name: {city ? city[0].EnglishName : null}</h3>
            <h6>Temp: {weather ? weather.DailyForecasts[0].Temperature.Minimum.Value : null} C</h6>
            <h6>Wind: </h6>
        </>
    );
}