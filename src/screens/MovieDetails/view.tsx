import React, { useMemo } from "react";
import { View, Image, TouchableOpacity, useColorScheme } from "react-native";
import { Text, Tile, Rating } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import { Layout, Section } from "components";
import Colors from "constants/colors";
import { IMAGE_URL } from "constants/api";
import { IMAGE_MEDIUM } from "constants/ui";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

const MovieDetailsView = ({
  navigation,
  toggleFavorite,
  movie,
  movieLoading,
  rating,
  isFavorite,
}: MovieDetailsProps) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);
  const {
    title,
    overview,
    genres,
    vote_average: voteAverage,
    poster_path: posterPath,
  } = movie;

  return (
    <Layout
      isLoading={movieLoading}
      navigation={navigation}
      hasMenu
      rightIcon={isFavorite ? "ios-heart" : "ios-heart-empty"}
      rightAction={toggleFavorite}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <Image
            style={styles.poster}
            source={{
              uri: `${IMAGE_URL(IMAGE_MEDIUM)}/${posterPath}`,
            }}
          />
          <Text style={[styles.title, { color: colors.textBold }]}>
            {title}
          </Text>
          <Text style={[styles.score, { color: colors.text }]}>
            {voteAverage}
          </Text>
          <Rating
            readonly
            showRating={false}
            ratingBackgroundColor={colors.text}
            type="custom"
            tintColor={colors.primary}
            imageSize={25}
            style={{ opacity: rating ? 1 : 0 }}
            startingValue={voteAverage ? voteAverage / 2 : null}
          />
        </View>
        {genres && (
          <Section text="Genres" style={styles.description}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {genres.map((genre) => (
                <Tile
                  title={genre.name}
                  containerStyle={{
                    backgroundColor: colors.secondary,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                    width: 100,
                    marginRight: 8,
                  }}
                  height={40}
                  titleStyle={{
                    fontSize: 15,
                    color: "white",
                    marginTop: -5,
                  }}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("Category")}
                />
              ))}
            </ScrollView>
          </Section>
        )}
        <Section text="Description" style={styles.description}>
          <Text>{overview}</Text>
        </Section>
      </ScrollView>
    </Layout>
  );
};

type MovieDetailsProps = {
  navigation: any;
  toggleFavorite: Function;
  movie: Object;
};

export default MovieDetailsView;
