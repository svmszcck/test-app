import "react-native";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import { Layout } from "components";
import { store } from "mocks";

jest.useFakeTimers();

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Layout />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
