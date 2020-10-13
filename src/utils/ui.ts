import { Alert, BackHandler } from "react-native";

import { SET_LOADING_STATE } from "store/constants";

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

export const delayTask = (task: Function, time: number) =>
  setTimeout(() => {
    task();
  }, time);

export const handleBackButton = () => {
  Alert.alert("Hold on!", "Are you sure you want to exit?", [
    {
      text: "Cancel",
      onPress: () => null,
      style: "cancel",
    },
    { text: "Yes", onPress: () => BackHandler.exitApp() },
  ]);
  return true;
};

export const showSurprise = (name: string) => {
  Alert.alert("Hey hey", `Hey ${name}. You are awesome :P`, [
    {
      text: "Nope",
      onPress: () => null,
    },
    { text: "Yes I am", onPress: () => {} },
  ]);
};

export const showCommonError = () => {
  Alert.alert("Error", "Something went wrong. Please try again :(");
};
