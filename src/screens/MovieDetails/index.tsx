import React, { useEffect } from "react";
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

  const toggleFavorite = () => {};

  return (
    <MovieDetailsView
      navigation={navigation}
      toggleFavorite={toggleFavorite}
      movie={movie}
      movieLoading={movieLoading}
    />
  );
};

type MovieDetailsProps = {
  navigation: any;
};

export default MovieDetails;
