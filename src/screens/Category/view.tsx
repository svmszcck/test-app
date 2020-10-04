import React, { useMemo } from "react";
import { View, ScrollView, useColorScheme } from "react-native";
import { ListItem, Text } from "react-native-elements";
import { isEmpty } from "lodash";

import { Layout, Section, List } from "components";
import Colors from "constants/colors";
import { IMAGE_URL } from "constants/api";
import { IMAGE_SMALL } from "constants/ui";
import styles from "./styles";

const CategoryView = ({ navigation, movies, loading, loadMore, name }) => {
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

export default CategoryView;
