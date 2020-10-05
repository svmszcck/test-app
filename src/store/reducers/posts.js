import {
  GET_MOVIES,
  GET_MOVIE,
  GET_GENRES,
  GET_POPULAR_MOVIES,
  GET_SEARCHED_MOVIES,
  GET_MOVIES_BY_GENRE,
  SET_LOADING_STATE,
  RESET_MOVIE,
  RESET_SEARCHED_MOVIES,
  RESET_POSTS,
} from "../constants";

const initialState = {
  genres: [],
  movies: [],
  popularMovies: [],
  movie: {},
  searchedMovies: [],
  moviesByGenre: [],
  genresLoading: false,
  moviesLoading: false,
  popularMoviesLoading: false,
  moviesByGenreLoading: false,
  movieLoading: false,
  isSearching: false,
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return { ...state, ...payload };
    case GET_GENRES:
      return { ...state, ...payload };
    case GET_MOVIE:
      return { ...state, ...payload };
    case GET_SEARCHED_MOVIES:
      return {
        ...state,
        searchedMovies: [...state.searchedMovies, ...payload.searchedMovies],
      };
    case GET_MOVIES_BY_GENRE:
      const wer = {
        ...state,
        moviesByGenre: [...state.moviesByGenre, ...payload.moviesByGenre],
      };
      return {
        ...state,
        moviesByGenre: [...state.moviesByGenre, ...payload.moviesByGenre],
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: [...state.popularMovies, ...payload.popularMovies],
      };
    case SET_LOADING_STATE:
      return { ...state, ...payload };
    case RESET_MOVIE:
      return { ...state, movie: {} };
    case RESET_SEARCHED_MOVIES:
      return { ...state, searchedMovies: [] };
    case RESET_POSTS:
      return initialState;
    default:
      return state;
  }
};

export default postsReducer;
