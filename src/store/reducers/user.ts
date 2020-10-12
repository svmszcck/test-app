import { Action, FavoriteMovie, UserState } from "types";
import {
  LOGIN,
  UPDATE_FAVORITES,
  UPDATE_SEARCH_COUNT,
  RESET_USER,
} from "../constants";

const initialState: UserState = {
  name: null,
  avatar: null,
  favorites: [],
  searchCount: 0,
};

const userReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case LOGIN:
      return { ...state, ...payload };
    case UPDATE_FAVORITES:
      const { id } = payload;
      let result;
      const { favorites } = state;
      const isFavorite = favorites.find(
        (favorite: FavoriteMovie) => favorite?.id === id
      );
      if (isFavorite)
        result = favorites.filter(
          (favorite: FavoriteMovie) => favorite?.id !== id
        );
      else result = [...favorites, payload];
      return { ...state, favorites: result };
    case UPDATE_SEARCH_COUNT:
      return { ...state, searchCount: state.searchCount + 1 };
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
