import React from "react";
import {
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, Tile } from "react-native-elements";
import { FlatGrid } from "react-native-super-grid";

import { Layout, Section, Carousel } from "components";
import { Genre } from "types";
import { useColor } from "hooks";
import Routes from "app_constants/routes";
import styles from "./styles";

import tada from "assets/images/tada.png";

const HomeView = ({
  genres,
  popularMovies,
  navigation,
  categories,
  setCategories,
  loadMore,
  popularMoviesLoading,
  isRefreshing,
  refresh,
  name,
  showMessage,
}: HomeViewProps) => {
  const colors = useColor();

  return (
    <Layout>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => (name ? showMessage() : null)}
        >
          <Image
            source={tada}
            style={{ width: 25, height: 25, marginRight: 12 }}
          />
          <Text style={[styles.user, { color: colors.textBold }]}>
            Hello {name ? name : "Unknown Soldier"}, welcome :)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.favorite}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            onPress={() => navigation.navigate(Routes.FAVORITES)}
            size={35}
            name="md-list-box"
            color={colors.textBold}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
        }
      >
        <Section text="Popular Movies">
          <Carousel
            isLoading={popularMoviesLoading}
            loadMore={loadMore}
            elements={popularMovies}
            navigation={navigation}
          />
        </Section>
        <Section text="Movie Categories">
          <FlatGrid
            itemDimension={140}
            data={genres}
            spacing={15}
            scrollEnabled={false}
            onLayout={() => setCategories(true)}
            style={{ opacity: categories ? 1 : 0 }}
            renderItem={({ item }) => (
              <Tile
                title={item.name}
                containerStyle={{
                  ...styles.genreContainer,
                  backgroundColor: colors.secondary,
                }}
                height={40}
                titleStyle={{ ...styles.genreTitle, color: colors.white }}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate(Routes.CATEGORY, {
                    id: item.id,
                    name: item.name,
                  })
                }
              />
            )}
          />
        </Section>
      </ScrollView>
    </Layout>
  );
};

type HomeViewProps = {
  genres: Array<Genre>;
  popularMovies: any;
  navigation: any;
  categories: boolean;
  setCategories: Function;
  loadMore: Function;
  genresLoading: boolean;
  moviesLoading: boolean;
  popularMoviesLoading: boolean;
  isRefreshing: boolean;
  refresh: () => void;
  name: string | null;
  showMessage: Function;
};

export default HomeView;
