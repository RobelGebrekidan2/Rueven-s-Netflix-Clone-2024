// const API_KEY = process.env.REACT_APP_API_KEY;
// const requests = {
// fetchtrending:'https://api.themoviedb.org/3/trending/all/day?language=en-US'
// fetchnetflixoriginals:
// fetchtopratedmovies: https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
// fetchactionmovies: https://api.themoviedb.org/3/genre/movie/list?language=en'
// fetchcomedymovies: https://api.themoviedb.org/3/genre/movie/list?language=en'
// fetchhorrormovies: https://api.themoviedb.org/3/genre/movie/list?language=en'
// fetchromancemovies: https://api.themoviedb.org/3/genre/movie/list?language=en'
// fetchdocumentaries: https://api.themoviedb.org/3/genre/movie/list?language=en'
// fetchtvshows:

// };


// export default requests;



const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;