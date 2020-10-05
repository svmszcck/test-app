import React, { useMemo } from "react";
import { View, Image, useColorScheme } from "react-native";
import { Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import { Layout, List, Section } from "components";
import styles from "./styles";

import Colors from "constants/colors";
import sad from "assets/images/sad.png";

const FavoritesView = ({
  navigation,
  favorites,
  removeItem,
}: FavoritesViewProps) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);
  return (
    <Layout
      navigation={navigation}
      hasMenu
      rightAction={() => navigation.goBack()}
    >
      {favorites.length === 0 ? (
        <View style={styles.warning}>
          <Image source={sad} style={styles.sadVector} />
          <Text style={[styles.warningTxt, { color: colors.textBold }]}>
            Favorite list is empty :(
          </Text>
        </View>
      ) : (
        <Section text="Favorites">
          <List
            elements={favorites}
            navigation={navigation}
            hasAction
            rightAction={removeItem}
            icon="ios-remove-circle"
          />
        </Section>
      )}
    </Layout>
  );
};

type FavoritesViewProps = {
  navigation: any;
  favorites: Array<object>;
  removeItem: Function;
};

export default FavoritesView;
