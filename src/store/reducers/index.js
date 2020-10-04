import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import userReducer from "./user";
import postsReducer from "./posts";

const userPersistConfig = {
  key: "user",
  storage: AsyncStorage,
};

export default combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  posts: postsReducer,
});
