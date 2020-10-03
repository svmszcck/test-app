import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import authReducer from "./auth";
import postsReducer from "./posts";

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  posts: postsReducer,
});
