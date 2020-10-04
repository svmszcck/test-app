import { useCallback } from "react";
import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import BackHandlerFunc from "types";

const useBackHandler = (handleBackButton: BackHandlerFunc) => {
  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", handleBackButton);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
      };
    }, [])
  );
};

export default useBackHandler;
