import { LOGIN } from "../constants";

const initialState = { data: {} };

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default authReducer;
