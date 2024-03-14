import { useState, useEffect } from "react";
import * as weatherService from "../../services/weatherService";

import "../Card/card.css"

export default function Card({ searchResult }) {
    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState(null);
    const [cityCode, setCityCode] = useState(null);

    useEffect(() => {
        weatherService.getCity(searchResult)
            .then(result => {
                setCity(result);
                setCityCode(result[0]?.Key);
            })
            .catch(error => {
                console.error("Error fetching city:", error);
            });
    }, [searchResult]);

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
        <div className="container">
            {weather && weather[0] && city && city[0] ? (
                <div className="card">
                    <img src={`../../../WeatherPics/${weather[0].WeatherIcon}.jpg`} alt={weather[0].WeatherText} />
                    <p className="city-name">{city[0].EnglishName}</p>
                    <p className="temp">{weather[0].Temperature.Metric.Value}&deg;C</p>
                    <p className="weather-text">{weather[0].WeatherText}</p>
                    <p className="humidity">Relative Humidity: {weather[0].RelativeHumidity}</p>
                    <p className="wind-speed">Wind speed: {weather[0].Wind.Speed.Metric.Value} Km/h</p>
                    
                </div>
            ) : (
                <div className="error-message">
                    <p>Seems like the city you are looking for doesn't exist.</p>
                    <p>Try to check if the spelling is correct.</p>
                </div>
            )}
        </div>
    );
}