import "react-native";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import { Search } from "screens";
import { store } from "mocks";

jest.useFakeTimers();

describe("Testing Search Screen", () => {
  let container;
  beforeEach(() => {
    container = (
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });

  it("renders correctly", () => {
    const tree = renderer.create(container).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
