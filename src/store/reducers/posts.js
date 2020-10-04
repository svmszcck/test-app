import {
  GET_MOVIES,
  GET_MOVIE,
  GET_GENRES,
  GET_POPULAR_MOVIES,
  GET_SEARCHED_MOVIES,
  SET_LOADING_STATE,
  RESET_MOVIE,
  RESET_POSTS,
} from "../constants";

const initialState = {
  genres: [],
  movies: [],
  popularMovies: [],
  movie: {},
  searchedMovies: [],
  genresLoading: false,
  moviesLoading: false,
  popularMoviesLoading: false,
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
      return { ...state, ...payload };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: [...state.popularMovies, ...payload.popularMovies],
      };
    case SET_LOADING_STATE:
      return { ...state, ...payload };
    case RESET_MOVIE:
      return { ...state, movie: {} };
    case RESET_POSTS:
      return initialState;
    default:
      return state;
  }
};

export default postsReducer;
