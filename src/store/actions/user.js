import { LOGIN, GET_FAVORITES } from "../constants";

export const updateUserInfo = (payload) => (dispatch) => {
  dispatch({ type: LOGIN, payload });
};

export const toggleFavorite = (payload) => (dispatch) => {
  dispatch({ type: GET_FAVORITES, payload });
};
