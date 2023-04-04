const apiKey = '98874a1fede37f67fa5540477c08eff0';
const url = "https://api.themoviedb.org/3";
const url1 = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=";
const url2 = "&with_watch_monetization_types=flatrate"


// URLs in requests object 
const requests = {
    fetchTrendng : `${url}/trending/all/day?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals : `${url}/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated : `${url}/movie/top_rated?api_key=${apiKey}&language=en-US` ,
    fetchActionMovies : `${url}/discover/movie?api_key=${apiKey}${url1}28${url2}`,
    fetchComedyMovies : `${url}/discover/movie?api_key=${apiKey}${url1}35${url2}`,
    fetchHorrorMovies : `${url}/discover/movie?api_key=${apiKey}${url1}27${url2}`,
    fetchRomanceMovies : `${url}/discover/movie?api_key=${apiKey}${url1}10749${url2}`,
    fetchDocumentaries : `${url}/discover/movie?api_key=${apiKey}${url1}99${url2}`
}

export default requests;