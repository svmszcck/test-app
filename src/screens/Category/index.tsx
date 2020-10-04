import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovieByGenre } from "store/actions/posts";
import CategoryView from "./view";

const Category = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const posts = useSelector((state) => state.posts);
  const { moviesByGenre, moviesByGenreLoading } = posts;

  const id = useMemo(() => route?.params?.id, [route]);

  const name = useMemo(() => route?.params?.name, [route]);

  useEffect(() => {
    if (id) dispatch(getMovieByGenre(id, page));
  }, []);

  const loadMore = () => {
    if (id) dispatch(getMovieByGenre(id, page + 1));
    setPage(page + 1);
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

export default Category;
