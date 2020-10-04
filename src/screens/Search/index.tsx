import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { searchMovie } from "store/actions/posts";
import SearchView from "./view";

const Search = ({ navigation }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const [searched, setSearched] = useState<boolean>(false);
  const posts = useSelector((state) => state.posts);
  const { searchedMovies, isSearching } = posts;

  const search = () => {
    if (value) dispatch(searchMovie(value, page));
    setSearched(true);
    setPage(page + 1);
  };

  console.log("searchedMovies: ", posts.searchedMovies);

  return (
    <SearchView
      navigation={navigation}
      movies={searchedMovies}
      search={search}
      value={value}
      setValue={setValue}
      loading={isSearching}
      searched={searched}
    />
  );
};

export default Search;
