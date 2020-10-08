import { sendRequest } from "utils/api";

export const genresService = async () => sendRequest("genre/movie/list");

export const popularMoviesService = async (page: number) =>
  sendRequest("movie/popular", { page });

export const movieDetailsService = async (id: string) =>
  sendRequest(`movie/${id}`);

export const searchMovieService = async (query: string, page: number) =>
  sendRequest("search/movie", { query, page });

export const moviesByGenreService = async (genre: Number, page: number) =>
  sendRequest("discover/movie", { with_genres: genre, page });
