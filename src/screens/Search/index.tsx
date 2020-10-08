import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchMovie, resetSearchedMovies } from "store/actions/posts";
import { updateSearchCount } from "store/actions/user";
import { Store } from "types";
import SearchView from "./view";

const Search = ({ navigation }: SearchProps) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const [searched, setSearched] = useState<boolean>(false);
  const posts = useSelector((state: Store) => state.posts);
  const { searchedMovies, isSearching } = posts;

  console.log(searchedMovies[0]);

  const search = (isLoadMore: boolean = false) => {
    if (!isLoadMore) dispatch(resetSearchedMovies());
    if (value) {
      const newPage = isLoadMore ? page + 1 : 1;
      dispatch(searchMovie(value, newPage));
      setSearched(true);
      setPage(newPage);
      if (!isLoadMore) dispatch(updateSearchCount());
    }
  };

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

type SearchProps = {
  navigation: any;
};

export default Search;
