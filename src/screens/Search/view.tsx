import React, { useMemo } from "react";
import { View, ScrollView, useColorScheme } from "react-native";
import { ListItem, Text, SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import { Layout, Section } from "components";
import Colors from "constants/colors";
import { IMAGE_URL } from "constants/api";
import { IMAGE_SMALL } from "constants/ui";
import styles from "./styles";

const SearchView = ({ navigation, movies, value, search, setValue }) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);

  return (
    <Layout navigation={navigation} hasMenu rightAction={() => {}}>
      <SearchBar
        platform="ios"
        placeholder="Type Here..."
        onSubmitEditing={search}
        onChangeText={setValue}
        value={value}
        containerStyle={{ backgroundColor: colors.primary }}
        inputContainerStyle={{ backgroundColor: "white" }}
      />
      {movies.length === 0 && (
        <Text style={[styles.warning, { color: colors.textBold }]}>
          There isn't any search result :(
        </Text>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {movies.map(
          ({
            id,
            title,
            poster_path: posterPath,
            vote_average: voteAverage,
          }) => (
            <ListItem
              leftAvatar={{
                size: "large",
                source: {
                  uri: `${IMAGE_URL(IMAGE_SMALL)}/${posterPath}`,
                },
                rounded: false,
              }}
              underlayColor={colors.primary}
              title={title}
              subtitle={`Score: ${voteAverage}`}
              containerStyle={styles.item}
              onPress={() => navigation.navigate("MovieDetails", { id })}
            />
          )
        )}
      </ScrollView>
    </Layout>
  );
};

export default SearchView;
