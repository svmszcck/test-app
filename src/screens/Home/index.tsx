import React, { useEffect, useState } from "react";
import { Alert, BackHandler, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import useBackHandler from "hooks/useBackHandler";
import { getGenres, getPopularMovies, resetPosts } from "store/actions/posts";
import { handleBackButton, showSurprise } from "utils/ui";
import { Store } from "types";
import HomeView from "./view";

const Home = ({ navigation }: HomeProps) => {
  const [categories, setCategories] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isRefreshing, showRefresh] = useState<boolean>(false);
  const posts = useSelector((state: Store) => state.posts);
  const user = useSelector((state: Store) => state.user);
  const dispatch = useDispatch();
  const {
    genres,
    popularMovies,
    genresLoading,
    moviesLoading,
    popularMoviesLoading,
  } = posts;
  const { name } = user;

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPopularMovies(page));
  }, []);

  const loadPopularMovies = () => {
    dispatch(getPopularMovies(page + 1));
    setPage(page + 1);
  };

  const refreshPage = () => {
    showRefresh(true);
    dispatch(resetPosts());
    dispatch(getGenres());
    dispatch(getPopularMovies(1));
    setPage(1);
    showRefresh(false);
  };

  useBackHandler(() => {
    handleBackButton();
    return true;
  });

  return (
    <HomeView
      genres={genres}
      popularMovies={popularMovies}
      navigation={navigation}
      categories={categories}
      setCategories={setCategories}
      loadMore={loadPopularMovies}
      genresLoading={genresLoading}
      moviesLoading={moviesLoading}
      popularMoviesLoading={popularMoviesLoading}
      isRefreshing={isRefreshing}
      refresh={refreshPage}
      name={name}
      showMessage={() => showSurprise(name)}
    />
  );
};

type HomeProps = {
  navigation: any;
};

export default Home;
