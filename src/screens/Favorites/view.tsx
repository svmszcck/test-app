import React from "react";
import { View, Image } from "react-native";
import { Text } from "react-native-elements";
import { isEmpty } from "lodash";

import { Layout, List, Section } from "components";
import { useColor } from "hooks";
import styles from "./styles";

import sad from "assets/images/sad.png";

const FavoritesView = ({
  navigation,
  favorites,
  removeItem,
}: FavoritesViewProps) => {
  const colors = useColor();
  return (
    <Layout
      navigation={navigation}
      hasMenu
      rightAction={() => navigation.goBack()}
    >
      {isEmpty(favorites) ? (
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
