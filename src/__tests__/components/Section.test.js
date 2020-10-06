import "react-native";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import { Section } from "components";
import { store } from "mocks";

jest.useFakeTimers();

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Section />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
