import React from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite } from "store/actions/user";
import { Store } from "types";
import FavoritesView from "./view";

const Favorites = ({ navigation }: FavoritesProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: Store) => state.user);
  const { favorites } = user;

  const removeItem = (id: number) => {
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

  return (
    <FavoritesView
      favorites={favorites}
      removeItem={removeItem}
      navigation={navigation}
    />
  );
};

type FavoritesProps = {
  navigation: any;
};

export default Favorites;
