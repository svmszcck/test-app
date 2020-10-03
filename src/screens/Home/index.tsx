import React, { useEffect } from "react";
import { Alert, BackHandler, Keyboard } from "react-native";
import { View } from "react-native";

import useBackHandler from "hooks/useBackHandler";
import { getGenres } from "store/actions/posts";

const Home = ({ navigation }) => {
  useEffect(() => {
    getGenres();
  }, []);

  const handleBackButton = () => {
    Alert.alert("Hold on!", "Are you sure you want to exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "Yes", onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  useBackHandler(handleBackButton);

  return <View></View>;
};

export default Home;
