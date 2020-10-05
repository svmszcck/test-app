import React, { useEffect, useMemo } from "react";
import {
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  Image,
  useColorScheme,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Text, Tile } from "react-native-elements";
import { FlatGrid } from "react-native-super-grid";

import useBackHandler from "hooks/useBackHandler";
import { getGenres } from "store/actions/posts";
import { Layout, Section, Carousel } from "components";
import Colors from "constants/colors";
import Device from "constants/layout";
import { IMAGE_URL } from "constants/api";
import { IMAGE_MEDIUM, POSTER_TEXT_LIMIT } from "constants/ui";
import { trimText } from "utils/ui";
import { Genre } from "types";
import styles from "./styles";

import tada from "assets/images/tada.png";

const posterWidth = Device.window.width / 2.5;
const posterHeight = posterWidth / 1.5;

const HomeView = ({
  genres,
  popularMovies,
  navigation,
  categories,
  setCategories,
  loadPopularMovies,
  genresLoading,
  moviesLoading,
  popularMoviesLoading,
  isRefreshing,
  refresh,
  name,
  showMessage,
}: HomeViewProps) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);

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
            onPress={() => navigation.navigate("Favorites")}
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
            loadMore={loadPopularMovies}
            elements={popularMovies}
          />
        </Section>
        <Section text="Movie Categories">
          {/*
          {genresLoading && (
            <View style={{ flex: 1, justifyContent: "flex-start" }}>
              <ActivityIndicator animating size="large" color="#0000ff" />
            </View>
          )}
          */}
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
                  backgroundColor: colors.secondary,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                  width: "100%",
                }}
                height={40}
                titleStyle={{
                  fontSize: 15,
                  color: "white",
                  marginTop: -5,
                }}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Category", {
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
};

export default HomeView;
