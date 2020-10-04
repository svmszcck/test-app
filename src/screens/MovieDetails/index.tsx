import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getGenres,
  getPopularMovies,
  getMovieDetails,
  resetMovie,
} from "store/actions/posts";
import MovieDetailsView from "./view";

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  const dispatch = useDispatch();
  const [rating, showRating] = useState(false);
  const posts = useSelector((state) => state.posts);
  const { movie, movieLoading } = posts;

  console.log(movie);

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

  const toggleFavorite = () => {};

  return (
    <MovieDetailsView
      navigation={navigation}
      toggleFavorite={toggleFavorite}
      movie={movie}
      movieLoading={movieLoading}
      rating={rating}
    />
  );
};

type MovieDetailsProps = {
  navigation: any;
};

export default MovieDetails;
