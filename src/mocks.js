import React from "react";
import configureMockStore from "redux-mock-store";
import * as redux from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const Stack = createStackNavigator();

export const store = mockStore({
  user: {
    name: "Onur",
    avatar: null,
    favorites: [],
  },
  posts: {
    movie: {
      id: 12,
      title: "Rwer",
      poster_path: "ekjrhtkjert",
      vote_average: 5.6,
    },
  },
});

export const MockedNavigator = ({ component, params = {} }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const navigation = {
  navigate: jest.fn(),
};

export const mockUseSelector = jest.fn();
export const mockUseDispatch = jest.fn();

export const useDispatchSpy = jest.spyOn(redux, "useDispatch");
export const mockDispatchFn = jest.fn();
useDispatchSpy.mockReturnValue(mockDispatchFn);
