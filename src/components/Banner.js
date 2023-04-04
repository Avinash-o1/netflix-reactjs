import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../apiRequests/Requests';
import "./Banner.css"

function Banner() {
    // declare states 
    const[Movie, setMovie] = useState();

    // fetch movie details into Movie state 
    useEffect(() => {
        async function fetchData (){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[
            Math.floor(Math.random() * request.data.results.length-1)
        ])
        return request;
      }
    
      fetchData();
    }, [])
    
    // function to limit the movie desciption size to 'n' 
    function truncate(string,n) {
        return string?.length>n?string.substring(0,n-1) + ' .....' : string;
    }

    // return the banner component
    return (
        <header className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}>
            <div className='banner_contents' >
                <h1 className='banner_title'>
                {Movie?.title || Movie?.name || Movie?.original_name}
                </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{ truncate(Movie?.overview , 150) }</h1>
            </div>

            <div className='banner_fadeBottom'/>
        </header>
    )
}

export default Banner