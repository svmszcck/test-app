// Routing

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type Tab1ParamList = {
  Tab1Screen: undefined;
};

export type Tab2ParamList = {
  Tab2Screen: undefined;
};

export type Tab3ParamList = {
  Tab3Screen: undefined;
};

// General

export type BackHandlerFunc = () => boolean | void;

// API

export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genres: Array<Genre>;
};

export type FavoriteMovie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

// Redux

export type Action = {
  type: string;
  payload: any;
};

export type UserState = {
  data: { name: string | null; avatar: string | null };
  favorites: Array<FavoriteMovie>;
};

export type PostsState = {
  genres: Array<Genre>;
  movies: Array<Movie>;
  popularMovies: Array<Movie>;
  movie: Movie;
  searchedMovies: Array<Movie>;
  moviesByGenre: Array<Movie>;
  genresLoading: boolean;
  moviesLoading: boolean;
  popularMoviesLoading: boolean;
  moviesByGenreLoading: boolean;
  movieLoading: boolean;
  isSearching: boolean;
};
