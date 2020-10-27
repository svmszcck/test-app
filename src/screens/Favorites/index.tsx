import React from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite } from "store/actions/user";
import { Store } from "types";
import { removeFavItem } from "utils/popups";
import FavoritesView from "./view";

const Favorites = ({ navigation }: FavoritesProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: Store) => state.user);
  const { favorites } = user;

  return (
    <FavoritesView
      favorites={favorites}
      removeItem={(id: number) => removeFavItem(id, dispatch, toggleFavorite)}
      navigation={navigation}
    />
  );
};

type FavoritesProps = {
  navigation: any;
};

export default Favorites;
