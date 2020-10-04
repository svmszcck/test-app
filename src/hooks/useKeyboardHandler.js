import { useCallback } from "react";
import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import BackHandlerFunc from "types";

const useBackHandler = (handleBackButton: BackHandlerFunc) => {
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);
};

export default useBackHandler;
