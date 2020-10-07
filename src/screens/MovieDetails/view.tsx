import React from "react";
import { View, Image, ScrollView } from "react-native";
import { isEmpty } from "lodash";
import { Text, Tile } from "react-native-elements";
import Rating from "react-native-star-rating";

import { Layout, Section } from "components";
import { IMAGE_URL } from "app_constants/api";
import { IMAGE_MEDIUM } from "app_constants/ui";
import Routes from "app_constants/routes";
import { Movie, Genre } from "types";
import { useColor } from "hooks";
import styles from "./styles";

const MovieDetailsView = ({
  navigation,
  toggleFavorite,
  movie,
  isFavorite,
}: MovieDetailsProps) => {
  const colors = useColor();
  const {
    title,
    overview,
    genres,
    vote_average: voteAverage,
    poster_path: posterPath,
  } = movie;

  return (
    <Layout
      isLoading={isEmpty(movie)}
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
            {voteAverage ? voteAverage : "-"}
          </Text>
          <Rating
            disabled
            maxStars={5}
            rating={voteAverage ? voteAverage / 2 : 0}
            fullStarColor={"#EC4B4B"}
          />
        </View>
        {genres && (
          <Section text="Genres" style={styles.description}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {genres.map((genre: Genre) => (
                <Tile
                  title={genre.name}
                  containerStyle={{
                    ...styles.genreContainer,
                    backgroundColor: colors.secondary,
                  }}
                  height={40}
                  titleStyle={{ ...styles.genreTitle, color: colors.white }}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate(Routes.CATEGORY, {
                      id: genre.id,
                      name: genre.name,
                    })
                  }
                />
              ))}
              {isEmpty(genres) && (
                <Text>This movie doesn't have any genre.</Text>
              )}
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
  movie: Movie;
  movieLoading: boolean;
  isFavorite: boolean;
};

export default MovieDetailsView;
