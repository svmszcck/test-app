import {
  LOGIN,
  UPDATE_FAVORITES,
  UPDATE_SEARCH_COUNT,
  RESET_USER,
} from "../constants";
import { UserInfo, FavoriteInfo } from "types";

export const updateUserInfo = (payload: UserInfo) => (dispatch: Function) => {
  dispatch({ type: LOGIN, payload });
};

export const toggleFavorite = (payload: FavoriteInfo) => (
  dispatch: Function
) => {
  dispatch({ type: UPDATE_FAVORITES, payload });
};

export const updateSearchCount = () => (dispatch: Function) => {
  dispatch({ type: UPDATE_SEARCH_COUNT });
};

export const logout = () => (dispatch: Function) => {
  dispatch({ type: RESET_USER });
};
