import { useEffect } from "react";
import { Keyboard, KeyboardEventListener } from "react-native";

import { isApple } from "utils/device";

const useKeyboardHandler = (
  showAction: KeyboardEventListener,
  hideAction: KeyboardEventListener
) => {
  useEffect(() => {
    Keyboard.addListener(
      isApple ? "keyboardWillShow" : "keyboardDidShow",
      showAction
    );
    Keyboard.addListener(
      isApple ? "keyboardWillHide" : "keyboardDidHide",
      hideAction
    );
  }, []);
};

export default useKeyboardHandler;
