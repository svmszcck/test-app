import { Alert, BackHandler } from "react-native";

import { SET_LOADING_STATE } from "store/constants";
import { DEFAULT_ERROR_TITLE } from "app_constants/errors";

export const updateLoginState = (
  dispatch: Function,
  key: string,
  isLoading: boolean
) => {
  dispatch({
    type: SET_LOADING_STATE,
    payload: { [key]: isLoading },
  });
};

export const trimText = (text: string, limit: number) => {
  const result = text.substring(0, limit - 3);
  return `${result}...`;
};

export const normalizeDate = (date: string) =>
  new Date(date).toLocaleDateString();

export const delayTask = (task: Function, time: number) =>
  setTimeout(() => {
    task();
  }, time);
