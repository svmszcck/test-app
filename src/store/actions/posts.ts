import {
  genresService,
  popularMoviesService,
  movieDetailsService,
  searchMovieService,
  moviesByGenreService,
  similarMoviesService,
} from "services/post";
import { updateLoginState } from "utils/ui";
import { showCommonError } from "utils/popups";
import {
  UPDATE_GENRES,
  UPDATE_POPULAR_MOVIES,
  UPDATE_MOVIE,
  UPDATE_SEARCHED_MOVIES,
  UPDATE_MOVIES_BY_GENRE,
  UPDATE_SIMILAR_MOVIES,
  RESET_MOVIE,
  RESET_SEARCHED_MOVIES,
  RESET_MOVIES_BY_GENRE,
  RESET_SIMILAR_MOVIES,
  RESET_POSTS,
  IS_SEARCHING,
  GENRES_LOADING,
  POPULAR_MOVIES_LOADING,
  MOVIE_LOADING,
  MOVIES_BY_GENRE_LOADING,
  SIMILAR_MOVIES_LOADING,
} from "../constants";

export const getGenres = () => async (dispatch: Function) => {
  updateLoginState(dispatch, GENRES_LOADING, true);
  const data = await genresService();
  if (data?.genres) {
    dispatch({
      type: UPDATE_GENRES,
      payload: { genres: data.genres },
    });
  } else showCommonError();
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
  } else showCommonError();
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
  } else showCommonError();
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
  } else showCommonError();
  updateLoginState(dispatch, IS_SEARCHING, false);
};

export const getMovieByGenre = (genre: number, page: number) => async (
  dispatch: Function
) => {
  updateLoginState(dispatch, MOVIES_BY_GENRE_LOADING, true);
  const data = await moviesByGenreService(genre, page);
  if (data?.results) {
    dispatch({
      type: UPDATE_MOVIES_BY_GENRE,
      payload: { moviesByGenre: data.results },
    });
  } else showCommonError();
  updateLoginState(dispatch, MOVIES_BY_GENRE_LOADING, false);
};

export const getSimilarMovies = (id: number, page: number) => async (
  dispatch: Function
) => {
  updateLoginState(dispatch, SIMILAR_MOVIES_LOADING, true);
  const data = await similarMoviesService(id, page);
  if (data?.results) {
    dispatch({
      type: UPDATE_SIMILAR_MOVIES,
      payload: { similarMovies: data.results },
    });
  } else showCommonError();
  updateLoginState(dispatch, SIMILAR_MOVIES_LOADING, false);
};

export const resetMovie = () => (dispatch: Function) => {
  dispatch({
    type: RESET_MOVIE,
  });
};

export const resetSearchedMovies = () => (dispatch: Function) => {
  dispatch({
    type: RESET_SEARCHED_MOVIES,
  });
};

export const resetMoviesByGenre = () => (dispatch: Function) => {
  dispatch({
    type: RESET_MOVIES_BY_GENRE,
  });
};

export const resetSimilarMovies = () => (dispatch: Function) => {
  dispatch({
    type: RESET_SIMILAR_MOVIES,
  });
};

export const resetPosts = () => (dispatch: Function) => {
  dispatch({
    type: RESET_POSTS,
  });
};
