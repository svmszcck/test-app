import { GET_MOVIES, SET_LOADING_STATE } from "../constants";

const initialState = { data: { genres: [], movies: [] }, loading: false };

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return { ...state, ...payload };
    case GET_GENRES:
      return { ...state, ...payload };
    case SET_LOADING_STATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default postsReducer;
