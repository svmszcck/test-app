import React, { useMemo } from "react";
import { View, useColorScheme } from "react-native";
import { ListItem, Text } from "react-native-elements";

import { Layout, Section } from "components";
import Colors from "constants/colors";
import styles from "./styles";

const FavoritesView = ({ favorites, removeItem }) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);
  return (
    <Layout>
      {favorites.length === 0 && (
        <Text style={[styles.warning, { color: colors.textBold }]}>
          Your favorite list is empty :(
        </Text>
      )}
      {favorites.map(({ id, title, img }) => (
        <ListItem
          leftAvatar={{
            title: "Rwerwer",
            source: {
              uri:
                "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            rounded: false,
          }}
          title={title}
          subtitle={"Trtrttr"}
          chevron
          onPress={() => removeItem(id)}
        />
      ))}
    </Layout>
  );
};

export default FavoritesView;
