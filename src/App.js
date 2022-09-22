import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import { fetchImage } from "./api/fetchImage";
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [image, setImage] = useState();

    async function search(e) {
        if (e.key === 'Enter') {
            // Declare a variable data which is the fetched data for the input - state
            const data = await fetchWeather(query)
            setWeather(data);
            // Reset input field 
            setQuery('');
            const imgData = await fetchImage(weather.weather[0].description)
            console.log(imgData.results.links);
            setImage(imgData.results[0].links.download);
        }
    }

    return (
        <div className="main-container">
        <img className="main-containerImg" src={image} />
            <input type='text' className='search' placeholder='Search...'
                // The two below are very important in react input 
                // The value, and onchnage is something from the state 
                value={query} onChange={(e) => { setQuery(e.target.value) }}
                onKeyPress={search} />
                {
                    weather.main && (
                        <div className="city">
                            <h2 className="city-name">
                                <span>{weather.name}</span>
                                <sup>{weather.sys.country}</sup>
                            </h2>
                            <div className="city-temp">
                                {Math.round(weather.main.temp)}
                                <sup>&deg;C</sup>
                            </div>
                            <div className="info">
                                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                                <p>{weather.weather[0].description}</p>
                            </div>
                        </div>
                    )
                }
        </div>
    );
}

export default App;