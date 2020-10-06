import "react-native";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import { Home } from "screens";
import { store, MockedNavigator } from "mocks";

jest.useFakeTimers();

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MockedNavigator component={Home} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
