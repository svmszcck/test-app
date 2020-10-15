import "react-native";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Text } from "react-native-elements";

import { List } from "components";
import { store } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing List Component", () => {
  let container;
  beforeEach(() => {
    container = (
      <Provider store={store}>
        <List elements={[]} warning />
      </Provider>
    );
  });
  it("renders correctly", () => {
    const tree = renderer.create(container).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should show the warning", () => {
    const wrapper = mount(container);

    const warningText = wrapper.find(Text);

    expect(warningText.exists()).toBeTruthy();
  });
});
