import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import { Layout } from "components";
import { store, navigation } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing Layout Component", () => {
  const component = (
    <Provider store={store}>
      <Layout isLoading hasMenu />
    </Provider>
  );

  it("renders correctly", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should show loading spinner", () => {
    const wrapper = mount(component);
    const loadingSpinner = wrapper.find(ActivityIndicator);

    expect(loadingSpinner.exists()).toBeTruthy();
  });

  it("should show the menu && go back", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Layout isLoading={false} hasMenu navigation={navigation} />
      </Provider>
    );

    const backIcon = wrapper.find(TouchableOpacity).at(0);

    backIcon.props().onPress();

    expect(navigation.goBack).toHaveBeenCalled();
  });
});
