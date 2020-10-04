import React from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite } from "store/actions/user";
import FavoritesView from "./view";

const Favorites = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { favorites } = user;

  const removeItem = (id) => {
    Alert.alert(
      "Warning!",
      "Are you sure you want to remove this movie from your favorite list",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Yes", onPress: () => dispatch(toggleFavorite({ id })) },
      ]
    );
  };

  return <FavoritesView favorites={favorites} removeItem={removeItem} />;
};

export default Favorites;
