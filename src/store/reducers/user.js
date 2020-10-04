import { LOGIN, GET_FAVORITES } from "../constants";

const initialState = { data: { name: "", avatar: null }, favorites: [] };

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, ...payload };
    case GET_FAVORITES:
      const { id, title, img } = payload;
      let result;
      const { favorites } = state;
      const isFavorite = favorites.find((favorite) => favorite?.id === id);
      if (isFavorite)
        result = favorites.filter((favorite) => favorite?.id !== id);
      else result = [...favorites, payload];
      return { ...state, favorites: result };
    default:
      return state;
  }
};

export default userReducer;
