import React from "react";
import { TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { Avatar, Button } from "react-native-elements";
import { mount } from "enzyme";

import { Welcome } from "screens";
import { store, navigation, MockedNavigator, useDispatchSpy } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing Welcome Screen", () => {
  let container;
  beforeEach(() => {
    container = (
      <Provider store={store}>
        <MockedNavigator component={Welcome} />
      </Provider>
    );
  });

  it("renders correctly", () => {
    const tree = renderer.create(container).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("test navigation actions", () => {
    const wrapper = mount(container);

    const skipButton = wrapper.find(TouchableOpacity).at(0);
    const saveUserButton = wrapper.find(Button).at(0);

    skipButton.props().onPress();
    saveUserButton.props().onPress();

    expect(navigation.navigate).toHaveBeenCalled();
    expect(useDispatchSpy).toHaveBeenCalled();
  });

  it("check avatar placeholder", () => {
    const wrapper = mount(container);

    const avatar = wrapper.find(Avatar).at(0);

    const source = avatar.props().source;

    expect(source).not.toBeNull();
  });
});
