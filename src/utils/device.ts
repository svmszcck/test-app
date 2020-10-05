import { AsyncStorage, Platform } from "react-native";

export const isAndroid: boolean = Platform.OS === "android";

export const isApple: boolean = Platform.OS === "ios";
