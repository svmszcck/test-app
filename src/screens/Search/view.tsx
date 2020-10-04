import React, { useMemo } from "react";
import { View, Image, useColorScheme } from "react-native";
import { ListItem, Text, SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import { Layout, Section, List } from "components";
import Colors from "constants/colors";
import { IMAGE_URL } from "constants/api";
import { IMAGE_SMALL } from "constants/ui";
import styles from "./styles";

import searchVector from "assets/images/search.png";

const SearchView = ({
  navigation,
  movies,
  value,
  search,
  setValue,
  loading,
  searched,
}) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);

  return (
    <Layout navigation={navigation}>
      <SearchBar
        platform="ios"
        placeholder="Write a movie name..."
        onSubmitEditing={() => search(false)}
        onChangeText={setValue}
        value={value}
        containerStyle={{ backgroundColor: colors.primary }}
        inputContainerStyle={{ backgroundColor: "white" }}
      />
      {searched ? (
        <Section text="Search Results">
          <List
            warning="There isn't any search result to show :("
            elements={movies}
            navigation={navigation}
            hasLoadMore
            loadMore={() => search(true)}
            isLoading={loading}
          />
        </Section>
      ) : (
        <View style={styles.warning}>
          <Image source={searchVector} style={styles.searchVector} />
        </View>
      )}
    </Layout>
  );
};

export default SearchView;
