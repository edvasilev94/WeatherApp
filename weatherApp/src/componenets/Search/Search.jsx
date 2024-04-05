import { useState } from "react";
import Card from "../Card/Card";

import * as weatherService from "../../services/weatherService"

import "./search.css"

export default function Search() {


    const [searchResult, setsearchResult] = useState(["Sofia"]);
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);



    const onSearchClickHandler = (e) => {
        e.preventDefault();
        setsearchResult(input);
    }


    const onChangeHandler = async (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);

        // const fetchedSuggestions = await fetchSuggestions(inputValue);
        // setSuggestions(fetchedSuggestions);
        weatherService.fetchSuggestions(inputValue)
            .then(result => {
                setSuggestions(result)
            })
            .catch (error => {
                console.error('Error fetching suggestions:', error);
                return [];
            })

    };

    // const fetchSuggestions = async (input) => {
    //     const apiKey = 'VSY3buYfkcOZGn4jcmEjoRQojV5EwLyS';
    //     const apiUrl = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${input}`;

    //     try {
    //         const response = await fetch(apiUrl);
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.error('Error fetching suggestions:', error);
    //         return [];
    //     }
    // };

    const selectSuggestionHandler = (suggestion) => {
        setInput(suggestion.LocalizedName);
        setSuggestions([]);
    };


    return (
        <form>
            <div className="serach-and-suggestion">
                <div className="search-bar-container">
                    <div className="serach">
                        <input className="input-city" type="text" value={input} onChange={onChangeHandler} placeholder="search a city" />
                    </div>
                    <button className="search-button" onClick={onSearchClickHandler}>Search</button>
                </div>
                {suggestions?.length > 0 && (
                <div className="search-suggestions">
                    <ul className="suggestion-ul">
                        {suggestions.map((suggestion) => (
                            <li className="suggested-city" key={suggestion.Key} onClick={() => selectSuggestionHandler(suggestion)}>
                                {suggestion.LocalizedName}, {suggestion.Country.LocalizedName}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            </div> 
            <Card searchResult={searchResult} />
        </form>
    )
}