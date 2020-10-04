import {
  genresService,
  popularMoviesService,
  movieDetailsService,
} from "services/post";
import { updateLoginState } from "utils/ui";
import {
  GET_GENRES,
  GET_POPULAR_MOVIES,
  GET_MOVIE,
  RESET_MOVIE,
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

export const resetMovie = () => async (dispatch: Function) => {
  dispatch({
    type: RESET_MOVIE,
  });
};

export const resetPosts = () => async (dispatch: Function) => {
  dispatch({
    type: RESET_POSTS,
  });
};
