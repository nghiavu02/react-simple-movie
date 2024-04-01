export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "fb93802a5f15fb2b3961b749c8c37496";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbSearch = "https://api.themoviedb.org/3/search/movie";
// https://api.themoviedb.org/3/movie/now_playing?api_key=fb93802a5f15fb2b3961b749c8c37496
export const tmdbApi = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetail: (id) => `${tmdbEndpoint}/${id}?api_key=${apiKey}`,
  getMovieMeta: (id, type = "credits") =>
    `${tmdbEndpoint}/${id}/${type}?api_key=${apiKey}`,
  getImage: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  getMovieSearch: (query, page) =>
    `${tmdbSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
};
