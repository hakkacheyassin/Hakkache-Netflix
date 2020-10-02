import React, {useEffect, useState} from "react";
import axios from "./axios";
import requests from "./requests";
import './Banner.css';

function Banner () {
    const  [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                    ]
            );
            return request;
        }
        fetchData();
    },[]);

    console.log(movies);

    return (
        <header className="banner"

                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                    backgroundPosition: "center center",
                }}
        >

            <div className="banner_contents">

                <h1 className="banner_title">
                {movies?.title || movies?.name || movies?.original_name}
                </h1>

                <div className="banner_buttons">

                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className="banner_description">
                    {movies?.overview}
                </h1>
            </div>
            <div className="banner_fedom"/>
        </header>

    )

}
export default Banner