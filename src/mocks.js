import React from "react";
import { Alert } from "react-native";
import configureMockStore from "redux-mock-store";
import * as redux from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const Stack = createStackNavigator();
jest.spyOn(Alert, "alert");

export const state = {
  user: {
    name: "Onur",
    avatar: null,
    favorites: [
      { id: 13123, title: "Blabla", poster_path: "ewrwer", vote_average: 3.2 },
    ],
  },
  posts: {
    movie: {
      id: 12,
      title: "Rwer",
      poster_path: "ekjrhtkjert",
      vote_average: 5.6,
    },
    movies: [],
    genres: [
      {
        id: 1,
        name: "Action",
      },
      {
        id: 2,
        name: "Horror",
      },
      {
        id: 3,
        name: "Thriller",
      },
    ],
    popularMovies: [],
    searchedMovies: [],
    moviesByGenre: [
      { id: 12, title: "Hehehe", poster_path: "rtyrty", vote_average: 7.6 },
    ],
    genresLoading: false,
    moviesLoading: false,
    popularMoviesLoading: false,
    moviesByGenreLoading: false,
    movieLoading: false,
    isSearching: false,
  },
};

export const store = mockStore(() => state);

export const MockedNavigator = ({ component: Component, params = {} }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MockedScreen" initialParams={params}>
          {(props) => <Component {...props} navigation={navigation} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

export const mockUseSelector = jest.fn();
export const mockUseDispatch = jest.fn();

export const useDispatchSpy = jest.spyOn(redux, "useDispatch");
export const mockDispatchFn = jest.fn();
useDispatchSpy.mockReturnValue(mockDispatchFn);
