import { getGenres as getGenresService } from "services/post";
import { GET_GENRES } from "../constants";

export const getGenres = (payload) => async (dispatch) => {
  const data = await getGenresService();
  console.log("xxx: ", data);
  if (data && data.genres) {
    dispatch({
      type: GET_GENRES,
      payload: { data: { genres: data.genres }, loading: false },
    });
  }
};
