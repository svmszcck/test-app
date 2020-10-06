import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovieByGenre, resetMoviesByGenre } from "store/actions/posts";
import { Store } from "types";
import CategoryView from "./view";

const Category = ({ navigation, route }: CategoryProps) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const posts = useSelector((state: Store) => state.posts);
  const { moviesByGenre, moviesByGenreLoading } = posts;

  const id = useMemo(() => route?.params?.id, [route]);

  const name = useMemo(() => route?.params?.name, [route]);

  useEffect(() => {
    if (id) dispatch(getMovieByGenre(id, page));
    return () => {
      dispatch(resetMoviesByGenre());
    };
  }, []);

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
