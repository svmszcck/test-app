import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovieDetails, resetMovie } from "store/actions/posts";
import { toggleFavorite } from "store/actions/user";
import { Movie, Store } from "types";
import MovieDetailsView from "./view";

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  const dispatch = useDispatch();
  const posts = useSelector((state: Store) => state.posts);
  const user = useSelector((state: Store) => state.user);
  const { movie, movieLoading } = posts;
  const {
    id,
    title,
    poster_path: posterPath,
    vote_average: voteAverage,
  }: Movie = movie;
  const { favorites } = user;
  const isFavorite = favorites.find((favorite: any) => favorite?.id === id);

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
    />
  );
};

type MovieDetailsProps = {
  navigation: any;
  route: {
    params: any;
  };
};

export default MovieDetails;
