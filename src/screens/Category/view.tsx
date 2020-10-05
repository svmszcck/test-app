import React, { useMemo } from "react";
import { View, ScrollView, useColorScheme } from "react-native";
import { ListItem, Text } from "react-native-elements";
import { isEmpty } from "lodash";

import { Layout, Section, List } from "components";
import Colors from "constants/colors";
import { IMAGE_URL } from "constants/api";
import { IMAGE_SMALL } from "constants/ui";
import { Movie } from "types";
import styles from "./styles";

const CategoryView = ({
  navigation,
  movies,
  loading,
  loadMore,
  name,
}: CategoryViewProps) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);

  return (
    <Layout navigation={navigation} hasMenu isLoading={isEmpty(movies)}>
      <Section text={name}>
        <List
          elements={movies}
          navigation={navigation}
          hasLoadMore
          loadMore={loadMore}
          isLoading={loading}
        />
      </Section>
    </Layout>
  );
};

type CategoryViewProps = {
  navigation: any;
  movies: Array<Movie>;
  loading: boolean;
  loadMore: Function;
  name: string;
};

export default CategoryView;
