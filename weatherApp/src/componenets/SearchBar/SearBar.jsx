import { useState } from "react";
import Card from "../Card/Card";

export default function Search() {


    const [citySearch, setCitySearch] = useState([]);
    const [searchResult, setsearchResult] = useState([]);

    const onSearchHandler = (e) => {
        e.preventDefault()
        setCitySearch(e.target.value)
        
    }

    const onSearchClickHandler = (e) => {
        e.preventDefault()
        setsearchResult(citySearch)
    } 

    return (
        <>
            <div className="serach">
                <input type="text" onChange={onSearchHandler} placeholder="search a city" />
                <button className="searchButton" onClick={onSearchClickHandler}>Search</button>
            </div>
            <Card searchResult={searchResult}/>
        </>

    )
}