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
  let component;
  beforeEach(() => {
    component = (
      <Provider store={store}>
        <Layout isLoading hasMenu />
      </Provider>
    );
  });

  it("renders correctly", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should show loading spinner", () => {
    const wrapper = mount(component);
    const loadingSpinner = wrapper.find(ActivityIndicator);

    expect(loadingSpinner.exists()).toBeTruthy();
  });

  it("should show the menu && handle the user actions", () => {
    const rightAction = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <Layout
          isLoading={false}
          hasMenu
          navigation={navigation}
          rightAction={rightAction}
        />
      </Provider>
    );

    const backIcon = wrapper.find(TouchableOpacity).at(0);
    const rightMenu = wrapper.find(TouchableOpacity).at(1);

    backIcon.props().onPress();
    rightMenu.props().onPress();

    expect(navigation.goBack).toHaveBeenCalled();
    expect(rightAction).toHaveBeenCalled();
  });
});
