import { sendRequest } from "utils/api";

export const genresService = () => sendRequest("genre/movie/list");

export const popularMoviesService = (page: number) =>
  sendRequest("movie/popular", { page });

export const movieDetailsService = (id: string) => sendRequest(`movie/${id}`);

export const searchMovieService = (query: string, page: number) =>
  sendRequest("search/movie", { query, page });

export const moviesByGenreService = (genre: number, page: number) =>
  sendRequest("discover/movie", { with_genres: genre, page });

export const similarMoviesService = (id: number, page: number) =>
  sendRequest(`movie/${id}/similar`, { page });
