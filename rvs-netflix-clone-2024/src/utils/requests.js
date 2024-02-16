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
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  // fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchTvMovieMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16 `,
};

export default requests;
