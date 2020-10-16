import React from "react";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import { Carousel } from "components";
import { store } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing Carousel Component", () => {
  let component;
  beforeEach(() => {
    component = (
      <Provider store={store}>
        <Carousel isLoading />
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
});
