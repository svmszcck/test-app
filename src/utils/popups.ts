import { Alert, BackHandler } from "react-native";

import { DEFAULT_ERROR_TITLE } from "app_constants/errors";

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
  Alert.alert(DEFAULT_ERROR_TITLE, "Something went wrong. Please try again :(");
};

export const removeFavItem = (
  id: number,
  dispatch: Function,
  toggleFavorite: Function
) => {
  Alert.alert(
    "Warning!",
    "Are you sure you want to remove this movie from your favorite list",
    [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "Yes", onPress: () => dispatch(toggleFavorite({ id })) },
    ]
  );
};
