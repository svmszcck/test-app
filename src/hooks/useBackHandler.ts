import { useEffect } from "react";
import { BackHandler } from "react-native";

import BackHandlerFunc from "types";

const useBackHandler = (handleBackButton: BackHandlerFunc) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);
};

export default useBackHandler;
