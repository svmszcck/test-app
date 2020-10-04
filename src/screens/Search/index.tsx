import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { searchMovie } from "store/actions/posts";
import SearchView from "./view";

const Search = ({ navigation }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>();
  const posts = useSelector((state) => state.posts);
  const { searchedMovies } = posts;

  const search = () => {
    dispatch(searchMovie(value, 1));
  };

  console.log("searchedMovies: ", posts.searchedMovies);

  return (
    <SearchView
      navigation={navigation}
      movies={searchedMovies}
      search={search}
      value={value}
      setValue={setValue}
    />
  );
};

export default Search;
