import { AsyncStorage } from "react-native";

import { Platform } from "react-native";

export const isAndroid = Platform.OS === "android";

export const isApple = Platform.OS === "ios";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    console.log(error);
  }
};

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return new Promise((resolve, reject) => resolve(value));
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
