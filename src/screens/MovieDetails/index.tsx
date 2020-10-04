import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getGenres,
  getPopularMovies,
  getMovieDetails,
  resetMovie,
} from "store/actions/posts";
import { toggleFavorite } from "store/actions/user";
import MovieDetailsView from "./view";

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  const dispatch = useDispatch();
  const [rating, showRating] = useState(false);
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);
  const { movie, movieLoading } = posts;
  const { id, title, poster_path: posterPath } = movie;
  const { favorites } = user;
  const isFavorite = favorites.find((favorite) => favorite?.id === id);

  console.log("user: ", user);

  useEffect(() => {
    const id = route?.params?.id;
    if (id) dispatch(getMovieDetails(id));
    return () => {
      console.log("cleaned up");
      dispatch(resetMovie());
    };
  }, []);

  useEffect(() => {
    if (movie.vote_average) {
      setTimeout(() => {
        showRating(true);
      }, 500);
    }
  }, [movie.vote_average]);

  const doToggleFavorite = () => {
    dispatch(toggleFavorite({ id, title, img: posterPath }));
  };

  return (
    <MovieDetailsView
      navigation={navigation}
      toggleFavorite={doToggleFavorite}
      movie={movie}
      movieLoading={movieLoading}
      rating={rating}
      isFavorite={isFavorite}
      // isFavorite={false}
    />
  );
};

type MovieDetailsProps = {
  navigation: any;
};

export default MovieDetails;
