import axios from "axios";

import { BASE_URL } from "constants/api";
import { API_KEY } from "app_config";

export const getGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response?.data;
};
