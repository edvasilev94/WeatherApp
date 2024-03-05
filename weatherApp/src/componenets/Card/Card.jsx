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
        <div className="card">
            <h3>City Name: {city ? city[0].EnglishName : null}</h3>
            <h6>Temp: {weather ? weather[0].Temperature.Metric.Value : null} C</h6>
            <h6>icon: {weather ? weather[0].WeatherText : null}</h6>
            <h6>Wind: </h6>
        </div>
    );
}