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
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);
  const { movie, movieLoading } = posts;
  const {
    id,
    title,
    poster_path: posterPath,
    vote_average: voteAverage,
  } = movie;
  const { favorites } = user;
  const isFavorite = favorites.find((favorite) => favorite?.id === id);

  console.log("user: ", user);

  useEffect(() => {
    const id = route?.params?.id;
    if (id) dispatch(getMovieDetails(id));
    return () => {
      dispatch(resetMovie());
    };
  }, []);

  const doToggleFavorite = () => {
    dispatch(
      toggleFavorite({
        id,
        title,
        poster_path: posterPath,
        vote_average: voteAverage,
      })
    );
  };

  return (
    <MovieDetailsView
      navigation={navigation}
      toggleFavorite={doToggleFavorite}
      movie={movie}
      movieLoading={movieLoading}
      isFavorite={isFavorite}
      // isFavorite={false}
    />
  );
};

type MovieDetailsProps = {
  navigation: any;
};

export default MovieDetails;
