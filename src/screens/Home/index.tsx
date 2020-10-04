import React, { useEffect, useState } from "react";
import { Alert, BackHandler, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import useBackHandler from "hooks/useBackHandler";
import { getGenres, getPopularMovies, resetPosts } from "store/actions/posts";
import HomeView from "./view";

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isRefreshing, showRefresh] = useState<boolean>(false);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const {
    genres,
    popularMovies,
    genresLoading,
    moviesLoading,
    popularMoviesLoading,
  } = posts;

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

  const handleBackButton = () => {
    Alert.alert("Hold on!", "Are you sure you want to exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "Yes", onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  useBackHandler(handleBackButton);

  return (
    <HomeView
      genres={genres}
      popularMovies={popularMovies}
      navigation={navigation}
      categories={categories}
      setCategories={setCategories}
      loadPopularMovies={loadPopularMovies}
      genresLoading={genresLoading}
      moviesLoading={moviesLoading}
      popularMoviesLoading={popularMoviesLoading}
      isRefreshing={isRefreshing}
      refresh={refreshPage}
    />
  );
};

export default Home;
