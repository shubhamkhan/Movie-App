const api = {
    originals: '/discover/tv?api_key='+process.env.REACT_APP_TMDB_API_KEY+'&with_networks=213',
    trending: '/trending/all/week?api_key='+process.env.REACT_APP_TMDB_API_KEY+'&language=en-US',
    topRated: '/movie/top_rated?api_key='+process.env.REACT_APP_TMDB_API_KEY+'&language=en-US',
    action: '/discover/movie?api_key='+process.env.REACT_APP_TMDB_API_KEY+'&with_genres=28',
    comedy: '/discover/movie?api_key='+process.env.REACT_APP_TMDB_API_KEY+'&with_genres=35',
    horror: '/discover/movie?api_key='+process.env.REACT_APP_TMDB_API_KEY+'&with_genres=27',
    romance: '/discover/movie?api_key='+process.env.REACT_APP_TMDB_API_KEY+'&with_genres=10749',
    documentaries: '/discover/movie?api_key='+process.env.REACT_APP_TMDB_API_KEY+'&with_genres=99',
}

export default api;