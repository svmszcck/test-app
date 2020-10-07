import React from "react";
import { View, Image } from "react-native";
import { SearchBar } from "react-native-elements";

import { Layout, Section, List } from "components";
import { Movie } from "types";
import { useColor } from "hooks";
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
}: SearchViewProps) => {
  const colors = useColor();

  return (
    <Layout navigation={navigation}>
      <SearchBar
        platform="ios"
        placeholder="Write a movie name..."
        onSubmitEditing={() => search(false)}
        onChangeText={setValue}
        value={value}
        containerStyle={{ backgroundColor: colors.primary }}
        inputContainerStyle={{ backgroundColor: colors.white }}
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

type SearchViewProps = {
  navigation: any;
  movies: Array<Movie>;
  value: string | undefined;
  search: Function;
  setValue: (text: string) => void;
  loading: boolean;
  searched: boolean;
};

export default SearchView;
