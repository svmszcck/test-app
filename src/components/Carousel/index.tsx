import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  GestureResponderEvent,
} from "react-native";
import { Text, Tile } from "react-native-elements";

import { IMAGE_URL } from "app_constants/api";
import Device from "app_constants/layout";
import { IMAGE_MEDIUM, POSTER_TEXT_LIMIT } from "app_constants/ui";
import Routes from "app_constants/routes";
import { trimText } from "utils/ui";
import { useColor } from "hooks";
import { Movie } from "types";

const posterWidth = Device.window.width / 2.5;
const posterHeight = posterWidth / 1.5;

const Carousel = ({
  elements = [],
  navigation,
  isLoading = false,
  loadMore,
}: CarouselType) => {
  const colors = useColor();
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={elements}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({
        item: { id, title, poster_path: posterPath, vote_average: voteAverage },
      }) => (
        <View style={styles.poster}>
          <Tile
            imageSrc={{
              uri: `${IMAGE_URL(IMAGE_MEDIUM)}/${posterPath}`,
            }}
            featured
            activeOpacity={0.8}
            height={posterHeight}
            width={posterWidth}
            onPress={() => navigation.navigate(Routes.MOVIE_DETAILS, { id })}
            imageContainerStyle={styles.posterImage}
            containerStyle={styles.posterContainer}
          />
          <Text style={[styles.posterTitle, { color: colors.text }]}>
            {title.length >= POSTER_TEXT_LIMIT
              ? trimText(title, POSTER_TEXT_LIMIT)
              : title}
          </Text>
        </View>
      )}
      ListFooterComponent={
        <View style={styles.posterLoadMore}>
          {isLoading ? (
            <ActivityIndicator animating size="large" color={colors.text} />
          ) : (
            <Text
              style={[styles.posterLoadMoreTxt, { color: colors.textBold }]}
              onPress={loadMore}
            >
              Load More
            </Text>
          )}
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  poster: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  posterContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  posterImage: {
    borderRadius: 10,
  },
  posterTitle: {
    marginTop: 5,
    fontSize: 15,
  },
  posterLoadMore: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    minWidth: 150,
    marginRight: 20,
  },
  posterLoadMoreTxt: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

type CarouselType = {
  elements: Array<Movie>;
  navigation: any;
  isLoading: boolean;
  loadMore: (event: GestureResponderEvent) => void;
};

export default Carousel;
