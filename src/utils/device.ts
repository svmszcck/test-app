import { Platform } from "react-native";

import { ANDROID, IOS } from "app_constants/device";

export const isAndroid: boolean = Platform.OS === ANDROID;

export const isApple: boolean = Platform.OS === IOS;
