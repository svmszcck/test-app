import "react-native";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import { MovieDetails } from "screens";
import { store, route } from "mocks";

jest.useFakeTimers();

describe("Testing Movie Details Screen", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MovieDetails route={route} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
