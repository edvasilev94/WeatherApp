import { useState } from "react";
import Card from "../Card/Card";

import "../SearchBar/searchBar.css"

export default function Search() {


    const [citySearch, setCitySearch] = useState([]);
    const [searchResult, setsearchResult] = useState(["Sofia"]);

    const onSearchHandler = (e) => {
        e.preventDefault()
        setCitySearch(e.target.value)
    }

    const onSearchClickHandler = (e) => {
        e.preventDefault()
        setsearchResult(citySearch)
    } 



    return (
        <form>
            <div className="search-bar-container">
                <div className="serach">
                    <input className="input-city" type="text" onChange={onSearchHandler} placeholder="search a city" />
                    <button className="search-button" onClick={onSearchClickHandler}>Search</button>
                </div>
            </div>
            <Card searchResult={searchResult}/>
        </form>

    )
}