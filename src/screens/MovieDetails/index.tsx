import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getMovieDetails,
  getSimilarMovies,
  resetMovie,
  resetSimilarMovies,
} from "store/actions/posts";
import { toggleFavorite } from "store/actions/user";
import { openLink } from "utils/general";
import { IMDB_URL } from "app_constants/api";
import { Movie, Store } from "types";
import MovieDetailsView from "./view";

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const posts = useSelector((state: Store) => state.posts);
  const user = useSelector((state: Store) => state.user);
  const { movie, similarMovies, movieLoading, similarMoviesLoading } = posts;
  const {
    id,
    title,
    poster_path: posterPath,
    vote_average: voteAverage,
  }: Movie = movie;
  const { favorites } = user;

  const isFavorite = useMemo(
    () => favorites.find((favorite: any) => favorite?.id === id),
    [favorites, id]
  );

  useEffect(() => {
    const { id } = route.params;
    if (movie.id !== id) {
      dispatch(resetMovie());
      dispatch(getMovieDetails(id));
    }
    dispatch(getSimilarMovies(id, page));
    return () => {
      dispatch(resetSimilarMovies());
    };
  }, [route.params.id]);

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

  const openIMDB = (id: string) => openLink(`${IMDB_URL}/${id}`);

  const loadSimilarMovies = () => {
    dispatch(getSimilarMovies(id, page + 1));
    setPage(page + 1);
  };

  return (
    <MovieDetailsView
      navigation={navigation}
      toggleFavorite={doToggleFavorite}
      movie={movie}
      movieLoading={movieLoading}
      isFavorite={isFavorite}
      openIMDB={openIMDB}
      similarMoviesLoading={similarMoviesLoading}
      loadMore={loadSimilarMovies}
      similarMovies={similarMovies}
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
