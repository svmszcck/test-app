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
  const component = (
    <Provider store={store}>
      <List elements={[]} warning />
    </Provider>
  );
  it("renders correctly", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("show show the warning", () => {
    const wrapper = mount(component);

    const warningText = wrapper.find(Text);

    expect(warningText.exists()).toBeTruthy();
  });
});
