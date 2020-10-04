import {
  genresService,
  popularMoviesService,
  movieDetailsService,
  searchMovieService,
  moviesByGenreService,
} from "services/post";
import { updateLoginState } from "utils/ui";
import {
  GET_GENRES,
  GET_POPULAR_MOVIES,
  GET_MOVIE,
  GET_SEARCHED_MOVIES,
  GET_MOVIES_BY_GENRE,
  RESET_MOVIE,
  RESET_SEARCHED_MOVIES,
  RESET_POSTS,
} from "../constants";

export const getGenres = () => async (dispatch: Function) => {
  updateLoginState(dispatch, "genresLoading", true);
  const data = await genresService();
  if (data && data.genres) {
    dispatch({
      type: GET_GENRES,
      payload: { genres: data.genres },
    });
    updateLoginState(dispatch, "genresLoading", false);
  }
};

export const getPopularMovies = (page: number) => async (
  dispatch: Function
) => {
  updateLoginState(dispatch, "popularMoviesLoading", true);
  const data = await popularMoviesService(page);
  if (data && data.results) {
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: { popularMovies: data.results },
    });
    updateLoginState(dispatch, "popularMoviesLoading", false);
  }
};

export const getMovieDetails = (id: number) => async (dispatch: Function) => {
  updateLoginState(dispatch, "movieLoading", true);
  const data = await movieDetailsService(id);
  if (data) {
    dispatch({
      type: GET_MOVIE,
      payload: { movie: data },
    });
    updateLoginState(dispatch, "movieLoading", false);
  }
};

export const searchMovie = (query: string, page: number) => async (
  dispatch: Function
) => {
  updateLoginState(dispatch, "isSearching", true);
  const data = await searchMovieService(query, page);
  if (data && data.results) {
    dispatch({
      type: GET_SEARCHED_MOVIES,
      payload: { searchedMovies: data.results },
    });
    updateLoginState(dispatch, "isSearching", false);
  }
};

export const getMovieByGenre = (genre: Number, page: number) => async (
  dispatch: Function
) => {
  updateLoginState(dispatch, "moviesByGenreLoading", true);
  const data = await moviesByGenreService(genre, page);
  if (data && data.results) {
    dispatch({
      type: GET_MOVIES_BY_GENRE,
      payload: { moviesByGenre: data.results },
    });
    updateLoginState(dispatch, "moviesByGenreLoading", false);
  }
};

export const resetMovie = () => async (dispatch: Function) => {
  dispatch({
    type: RESET_MOVIE,
  });
};

export const resetSearchedMovies = () => async (dispatch: Function) => {
  dispatch({
    type: RESET_SEARCHED_MOVIES,
  });
};

export const resetPosts = () => async (dispatch: Function) => {
  dispatch({
    type: RESET_POSTS,
  });
};
