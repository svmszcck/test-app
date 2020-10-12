import {
  LOGIN,
  UPDATE_FAVORITES,
  UPDATE_SEARCH_COUNT,
  RESET_USER,
} from "../constants";

export const updateUserInfo = (payload) => (dispatch) => {
  dispatch({ type: LOGIN, payload });
};

export const toggleFavorite = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_FAVORITES, payload });
};

export const updateSearchCount = () => (dispatch) => {
  dispatch({ type: UPDATE_SEARCH_COUNT });
};

export const logout = () => (dispatch) => {
  dispatch({ type: RESET_USER });
};
