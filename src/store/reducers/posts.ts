import { Action, PostsState } from "types";
import {
  UPDATE_MOVIES,
  UPDATE_MOVIE,
  UPDATE_GENRES,
  UPDATE_POPULAR_MOVIES,
  UPDATE_SEARCHED_MOVIES,
  UPDATE_MOVIES_BY_GENRE,
  SET_LOADING_STATE,
  RESET_MOVIE,
  RESET_SEARCHED_MOVIES,
  RESET_MOVIES_BY_GENRE,
  RESET_POSTS,
} from "../constants";

const initialState: PostsState = {
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

const postsReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case UPDATE_MOVIES:
      return { ...state, ...payload };
    case UPDATE_GENRES:
      return { ...state, ...payload };
    case UPDATE_MOVIE:
      return { ...state, ...payload };
    case UPDATE_SEARCHED_MOVIES:
      return {
        ...state,
        searchedMovies: [...state.searchedMovies, ...payload.searchedMovies],
      };
    case UPDATE_MOVIES_BY_GENRE:
      const wer = {
        ...state,
        moviesByGenre: [...state.moviesByGenre, ...payload.moviesByGenre],
      };
      return {
        ...state,
        moviesByGenre: [...state.moviesByGenre, ...payload.moviesByGenre],
      };
    case UPDATE_POPULAR_MOVIES:
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
    case RESET_MOVIES_BY_GENRE:
      return { ...state, moviesByGenre: [] };
    case RESET_POSTS:
      return initialState;
    default:
      return state;
  }
};

export default postsReducer;
