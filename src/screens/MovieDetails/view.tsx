import React from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import { isEmpty } from "lodash";
import { Text, Tile } from "react-native-elements";
import Rating from "react-native-star-rating";

import { Carousel, Layout, Section } from "components";
import { IMAGE_URL } from "app_constants/api";
import { IMAGE_MEDIUM, GENRE_TEXT_LIMIT } from "app_constants/ui";
import Routes from "app_constants/routes";
import { trimText, normalizeDate } from "utils/ui";
import { Movie, Genre } from "types";
import { useColor } from "hooks";
import styles from "./styles";

import placeholder from "assets/images/movie.jpg";

const MovieDetailsView = ({
  navigation,
  toggleFavorite,
  movie,
  isFavorite,
  openIMDB,
  similarMoviesLoading,
  loadMore,
  similarMovies,
}: MovieDetailsProps) => {
  const colors = useColor();
  const {
    title,
    overview,
    genres,
    vote_average: voteAverage,
    poster_path: posterPath,
    imdb_id: imdbID,
    release_date: releaseDate,
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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => (imdbID ? openIMDB(imdbID) : null)}
          >
            <Image
              style={styles.poster}
              source={
                posterPath
                  ? {
                      uri: `${IMAGE_URL(IMAGE_MEDIUM)}/${posterPath}`,
                    }
                  : placeholder
              }
            />
          </TouchableOpacity>
          <Text
            onPress={() => (imdbID ? openIMDB(imdbID) : null)}
            style={[styles.title, { color: colors.textBold }]}
          >
            {title}
          </Text>
          <Text style={[styles.score, { color: colors.text }]}>
            {voteAverage ? voteAverage : "-"}
          </Text>
          <Rating
            disabled
            maxStars={5}
            rating={voteAverage ? voteAverage / 2 : 0}
            fullStarColor={colors.danger}
          />
        </View>
        {genres && (
          <Section text="Genres" style={styles.info}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {genres.map((genre: Genre) => (
                // @ts-ignore
                <Tile
                  key={genre.id}
                  title={
                    genre.name.length >= GENRE_TEXT_LIMIT
                      ? trimText(genre.name, GENRE_TEXT_LIMIT)
                      : genre.name
                  }
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
        <Section text="Release Date" style={styles.info}>
          <Text style={{ color: colors.text }}>
            {releaseDate ? normalizeDate(releaseDate) : "-"}
          </Text>
        </Section>
        <Section text="Description" style={styles.info}>
          <Text style={{ color: colors.text }}>{overview}</Text>
        </Section>
        <Section text="Similar Movies" style={styles.similarMovies}>
          <Carousel
            isLoading={similarMoviesLoading}
            loadMore={loadMore}
            elements={similarMovies}
            navigation={navigation}
          />
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
  openIMDB: Function;
  similarMoviesLoading: boolean;
  loadMore: Function;
  similarMovies: any;
};

export default MovieDetailsView;
