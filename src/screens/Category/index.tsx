import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovieByGenre, resetMoviesByGenre } from "store/actions/posts";
import { Store } from "types";
import CategoryView from "./view";

const Category = ({ navigation, route }: CategoryProps) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const posts = useSelector((state: Store) => state.posts);
  const { moviesByGenre, moviesByGenreLoading } = posts;
  const { id, name } = route.params;

  useEffect(() => {
    if (id) dispatch(getMovieByGenre(id, page));
    return () => {
      dispatch(resetMoviesByGenre());
    };
  }, [id]);

  const loadMore = () => {
    if (id) {
      dispatch(getMovieByGenre(id, page + 1));
      setPage(page + 1);
    }
  };

  return (
    <CategoryView
      navigation={navigation}
      movies={moviesByGenre}
      loading={moviesByGenreLoading}
      loadMore={loadMore}
      name={name}
    />
  );
};

type CategoryProps = {
  navigation: any;
  route: {
    params: any;
  };
};

export default Category;
