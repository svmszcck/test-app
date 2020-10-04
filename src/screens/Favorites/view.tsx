import React, { useMemo } from "react";
import { View, useColorScheme } from "react-native";
import { ListItem, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import { Layout, List, Section } from "components";
import Colors from "constants/colors";

const FavoritesView = ({ navigation, favorites, removeItem }) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);
  return (
    <Layout
      navigation={navigation}
      hasMenu
      rightAction={() => navigation.goBack()}
    >
      <Section text="Favorites">
        <List
          warning="Favorite list is empty :("
          elements={favorites}
          navigation={navigation}
          hasAction
          rightAction={removeItem}
          icon="ios-remove-circle"
        />
      </Section>
    </Layout>
  );
};

export default FavoritesView;
