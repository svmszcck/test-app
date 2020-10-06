import "react-native";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import { Category } from "screens";
import { store } from "mocks";

jest.useFakeTimers();

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Category />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
