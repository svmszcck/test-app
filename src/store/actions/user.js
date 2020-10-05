import { LOGIN, GET_FAVORITES, RESET_USER } from "../constants";

export const updateUserInfo = (payload) => (dispatch) => {
  dispatch({ type: LOGIN, payload });
};

export const toggleFavorite = (payload) => (dispatch) => {
  dispatch({ type: GET_FAVORITES, payload });
};

export const logout = () => (dispatch) => {
  dispatch({ type: RESET_USER });
};
