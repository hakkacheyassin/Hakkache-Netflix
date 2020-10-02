import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, SettrailerUrl] = useState("");

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390px",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handeleClick = (movie) => {
        if (trailerUrl) {
            SettrailerUrl('');
        } else {
            movieTrailer(movie?.name || "").then(
                (url) => {
                    const urlParmas = new URLSearchParams(new URL(url).search);
                    SettrailerUrl(urlParmas.get('v'))
                }
            )
        }
    }

    console.log(movies)


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                        <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                             key={movie.id}
                             onClick={() => handeleClick(movie)}
                             src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                    )
                )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row