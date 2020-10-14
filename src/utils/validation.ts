import { Alert } from "react-native";

import { NAME_REGEX } from "app_constants/general";
import {
  DEFAULT_ERROR_TITLE,
  NAME_LENGTH_ERROR,
  NAME_TYPE_ERROR,
  NAME_EMPTY_ERROR,
} from "app_constants/errors";

export const validateName = (text: string | undefined) => {
  if (!text) {
    Alert.alert(DEFAULT_ERROR_TITLE, NAME_EMPTY_ERROR);
    return false;
  }
  if (text.length >= 20) {
    Alert.alert(DEFAULT_ERROR_TITLE, NAME_LENGTH_ERROR);
    return false;
  } else if (NAME_REGEX.test(text)) {
    Alert.alert(DEFAULT_ERROR_TITLE, NAME_TYPE_ERROR);
    return false;
  }
  return true;
};
