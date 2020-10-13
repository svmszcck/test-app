import { useEffect } from "react";
import { Keyboard, KeyboardEventListener } from "react-native";

import { isApple } from "utils/device";
import {
  KEYBOARD_WILL_SHOW,
  KEYBOARD_DID_SHOW,
  KEYBOARD_WILL_HIDE,
  KEYBOARD_DID_HIDE,
} from "app_constants/events";

const useKeyboardHandler = (
  showAction: KeyboardEventListener,
  hideAction: KeyboardEventListener
) => {
  useEffect(() => {
    Keyboard.addListener(
      isApple ? KEYBOARD_WILL_SHOW : KEYBOARD_DID_SHOW,
      showAction
    );
    Keyboard.addListener(
      isApple ? KEYBOARD_WILL_HIDE : KEYBOARD_DID_HIDE,
      hideAction
    );
  }, []);
};

export default useKeyboardHandler;
