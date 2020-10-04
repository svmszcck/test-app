import React, { useMemo } from "react";
import { View, useColorScheme } from "react-native";
import { ListItem, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import { Layout, Section } from "components";
import Colors from "constants/colors";
import { IMAGE_URL } from "constants/api";
import { IMAGE_SMALL } from "constants/ui";
import styles from "./styles";

const FavoritesView = ({ navigation, favorites, removeItem }) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);
  return (
    <Layout>
      {favorites.length === 0 && (
        <Text style={[styles.warning, { color: colors.textBold }]}>
          Your favorite list is empty :(
        </Text>
      )}
      {favorites.map(({ id, title, img, score }) => (
        <ListItem
          leftAvatar={{
            size: "large",
            source: {
              uri: `${IMAGE_URL(IMAGE_SMALL)}/${img}`,
            },
            rounded: false,
          }}
          underlayColor={colors.primary}
          title={title}
          subtitle={`Score: ${score}`}
          containerStyle={styles.item}
          onPress={() => navigation.navigate("MovieDetails", { id })}
          rightIcon={
            <Ionicons
              onPress={() => removeItem(id)}
              size={30}
              color={colors.text}
              name="ios-remove-circle"
            />
          }
        />
      ))}
    </Layout>
  );
};

export default FavoritesView;
