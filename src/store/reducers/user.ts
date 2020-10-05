import { Action, FavoriteMovie, UserState } from "types";
import { LOGIN, GET_FAVORITES, RESET_USER } from "../constants";

const initialState: UserState = {
  name: null,
  avatar: null,
  favorites: [],
};

const userReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case LOGIN:
      return { ...state, ...payload };
    case GET_FAVORITES:
      const { id, title, img } = payload;
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
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
