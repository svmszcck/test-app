import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovieByGenre } from "store/actions/posts";
import CategoryView from "./view";

const Category = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const { moviesByGenre, moviesByGenreLoading } = posts;

  console.log("moviesByGenre: ", moviesByGenre);

  useEffect(() => {
    const id = route?.params?.id;
    if (id) dispatch(getMovieByGenre(id, 1));
  }, []);

  return (
    <CategoryView
      navigation={navigation}
      movies={moviesByGenre}
      loading={moviesByGenreLoading}
    />
  );
};

export default Category;
