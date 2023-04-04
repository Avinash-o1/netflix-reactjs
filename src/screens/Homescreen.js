import React from 'react'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Row from '../components/Row'
import requests from '../apiRequests/Requests';

function Homescreen() {
  return (
    <div>
        <Nav/>

        <Banner/>

        <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        />
        <Row
        title='TRENDING NOW'
        fetchUrl={requests.fetchTrendng}
        /><Row
        title='TOP RATED'
        fetchUrl={requests.fetchTopRated}
        /><Row
        title='ACTION MOVIES'
        fetchUrl={requests.fetchActionMovies}
        /><Row
        title='COMEDY MOVIES'
        fetchUrl={requests.fetchComedyMovies}
        /><Row
        title='HORROR MOVIES'
        fetchUrl={requests.fetchHorrorMovies}
        /><Row
        title='ROMANCE MOVIES'
        fetchUrl={requests.fetchRomanceMovies}
        /><Row
        title='DOCUMENTARIES'
        fetchUrl={requests.fetchDocumentaries}
        />

    </div>
  )
}

export default Homescreen