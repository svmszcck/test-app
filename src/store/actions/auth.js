import { LOGIN } from "../constants";

export const updateUserInfo = (payload) => (dispatch) => {
  dispatch({ type: LOGIN, payload });
};
