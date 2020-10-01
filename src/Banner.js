import React, {useEffect, useState} from "react";
import axios from "./axios";
import requests from "./requests";

function Banner () {
    const  [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchNetflixOriginals);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                    ]
            )

        }
        fetchData();
    },[fetchNetflixOriginals]);

    return (
        <header>


        </header>

    )

}
export default Banner