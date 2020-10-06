import React from "react";
import { isEmpty } from "lodash";

import { Layout, Section, List } from "components";
import { useColor } from "hooks";
import { Movie } from "types";

const CategoryView = ({
  navigation,
  movies,
  loading,
  loadMore,
  name,
}: CategoryViewProps) => {
  const colors = useColor();

  return (
    <Layout navigation={navigation} hasMenu isLoading={isEmpty(movies)}>
      <Section text={name}>
        <List
          elements={movies}
          navigation={navigation}
          hasLoadMore
          loadMore={loadMore}
          isLoading={loading}
        />
      </Section>
    </Layout>
  );
};

type CategoryViewProps = {
  navigation: any;
  movies: Array<Movie>;
  loading: boolean;
  loadMore: Function;
  name: string;
};

export default CategoryView;
