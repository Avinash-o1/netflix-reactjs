import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from 'axios'

function Row({ title, fetchUrl, isLargeRow }) {

    const base_url = "https://image.tmdb.org/t/p/original/"
    // define and declare state 
    const [movies, setMovie] = useState();

    // fetch data from API
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl)
            setMovie(response.data.results)
            return response;
        }

        fetchData();
    }, [fetchUrl]);


    return (
        <div className='row'>
            <h1>{title}</h1>


            {/* display the movies  */}
            <div className='row_posters'>
                {movies?.map((movie) => 
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                    <img
                        className={`${isLargeRow ? "row_posterLarge" : "row_poster"}`}
                        key={movie?.id}
                        src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path
                            }`}
                        alt={movie?.name}
                    ></img>
                ))}
            </div>
        </div>
    )
}

export default Row;