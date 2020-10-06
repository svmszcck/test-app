import axios from "axios";

import { BASE_URL } from "app_constants/api";
import { API_KEY } from "app_config";

export const genresService = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data;
};

export const popularMoviesService = async (page: number) => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });
  return response?.data;
};

export const movieDetailsService = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data;
};

export const searchMovieService = async (query: string, page: number) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
  return response?.data;
};

export const moviesByGenreService = async (genre: Number, page: number) => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: genre,
      page,
    },
  });
  return response?.data;
};
