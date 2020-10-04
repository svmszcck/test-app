import React, { useMemo } from "react";
import { View, ScrollView, useColorScheme } from "react-native";
import { ListItem, Text } from "react-native-elements";

import { Layout, Section, List } from "components";
import Colors from "constants/colors";
import { IMAGE_URL } from "constants/api";
import { IMAGE_SMALL } from "constants/ui";
import styles from "./styles";

const CategoryView = ({ navigation, movies, loading }) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);

  return (
    <Layout navigation={navigation} hasMenu isLoading={loading}>
      <Section text="Category">
        <List elements={movies} navigation={navigation} />
      </Section>
    </Layout>
  );
};

export default CategoryView;
