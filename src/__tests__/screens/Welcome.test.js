import React from "react";
import { TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { Avatar, Button } from "react-native-elements";
import { mount } from "enzyme";

import { Welcome } from "screens";
import { store, navigation, useDispatchSpy } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing Welcome Screen", () => {
  const keyboardDidShow = jest.fn();
  const selectUserImg = jest.fn();
  const setName = jest.fn();
  const saveUser = jest.fn();

  const container = (
    <Provider store={store}>
      <Welcome navigation={navigation} />
    </Provider>
  );

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Welcome />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("test navigation actions", () => {
    const wrapper = mount(container);

    const skipButton = wrapper.find(TouchableOpacity).at(0);
    const saveUserButton = wrapper.find(Button).at(0);

    skipButton.props().onPress();

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
