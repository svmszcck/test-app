import {
  genresService,
  popularMoviesService,
  movieDetailsService,
  searchMovieService,
  moviesByGenreService,
} from "services/post";
import { updateLoginState, showApiError } from "utils/ui";
import {
  UPDATE_GENRES,
  UPDATE_POPULAR_MOVIES,
  UPDATE_MOVIE,
  UPDATE_SEARCHED_MOVIES,
  UPDATE_MOVIES_BY_GENRE,
  RESET_MOVIE,
  RESET_SEARCHED_MOVIES,
  RESET_MOVIES_BY_GENRE,
  RESET_POSTS,
  GENRES_LOADING,
  POPULAR_MOVIES_LOADING,
  MOVIE_LOADING,
  IS_SEARCHING,
  MOVIES_BY_GENRE_LOADING
} from "../constants";

export const getGenres = () => async (dispatch: Function) => {
  updateLoginState(dispatch, GENRES_LOADING, true);
  const data = await genresService();
  if (data && data.genres) {
    dispatch({
      type: UPDATE_GENRES,
      payload: { genres: data.genres },
    });
  } else showApiError();
  updateLoginState(dispatch, GENRES_LOADING, false);
};

export const getPopularMovies = (page: number) => async (
  dispatch: Function
) => {
  updateLoginState(dispatch, POPULAR_MOVIES_LOADING, true);
  const data = await popularMoviesService(page);
  if (data?.results) {
    dispatch({
      type: UPDATE_POPULAR_MOVIES,
      payload: { popularMovies: data.results },
    });
  } else showApiError();
  updateLoginState(dispatch, POPULAR_MOVIES_LOADING, false);
};

export const getMovieDetails = (id: number) => async (dispatch: Function) => {
  updateLoginState(dispatch, MOVIE_LOADING, true);
  const data = await movieDetailsService(id);
  if (data) {
    dispatch({
      type: UPDATE_MOVIE,
      payload: { movie: data },
    });
  } else showApiError();
  updateLoginState(dispatch, MOVIE_LOADING, false);
};

export const searchMovie = (query: string, page: number) => async (
  dispatch: Function
) => {
  updateLoginState(dispatch, IS_SEARCHING, true);
  const data = await searchMovieService(query, page);
  if (data?.results) {
    dispatch({
      type: UPDATE_SEARCHED_MOVIES,
      payload: { searchedMovies: data.results },
    });
  } else showApiError();
  updateLoginState(dispatch, IS_SEARCHING, false);
};

export const getMovieByGenre = (genre: Number, page: number) => async (
  dispatch: Function
) => {
  updateLoginState(dispatch, MOVIES_BY_GENRE_LOADING, true);
  const data = await moviesByGenreService(genre, page);
  if (data?.results) {
    dispatch({
      type: UPDATE_MOVIES_BY_GENRE,
      payload: { moviesByGenre: data.results },
    });
  } else showApiError();
  updateLoginState(dispatch, MOVIES_BY_GENRE_LOADING, false);
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

export const resetMoviesByGenre = () => async (dispatch: Function) => {
  dispatch({
    type: RESET_MOVIES_BY_GENRE,
  });
};

export const resetPosts = () => async (dispatch: Function) => {
  dispatch({
    type: RESET_POSTS,
  });
};
