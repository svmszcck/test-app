import { useCallback } from "react";
import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import BackHandlerFunc from "types";
import { HARDWARE_BACK } from "app_constants/events";

const useBackHandler = (handleBackButton: BackHandlerFunc) => {
  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener(HARDWARE_BACK, handleBackButton);
      return () => {
        BackHandler.removeEventListener(HARDWARE_BACK, handleBackButton);
      };
    }, [])
  );
};

export default useBackHandler;
