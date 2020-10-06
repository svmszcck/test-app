import { TouchableOpacity } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { Avatar, Button } from "react-native-elements";
import { mount } from "enzyme";

import { Welcome } from "screens";
import WelcomeView from "screens/Welcome/view";
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

  const view = (
    <WelcomeView
      navigation={navigation}
      keyboardDidShow={keyboardDidShow}
      selectUserImg={selectUserImg}
      setName={setName}
      saveUser={saveUser}
      user={{}}
      name="Rrewer"
      avatar={null}
    />
  );

  it("renders correctly", () => {
    const tree = renderer
      .create(<Provider store={store}>{view}</Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls props successfully", () => {
    const inst = renderer.create(<Provider store={store}>{view}</Provider>);
    const avatar = inst.root.findByType(Avatar);
    avatar.props.onPress();

    expect(selectUserImg).toHaveBeenCalled();
  });

  it("test navigation actions", () => {
    const wrapper = mount(container);

    const skipButton = wrapper.find(TouchableOpacity).at(0);
    const saveUserButton = wrapper.find(Button).at(0);

    skipButton.props().onPress();

    expect(navigation.navigate).toHaveBeenCalled();
    expect(useDispatchSpy).toHaveBeenCalled();
  });
});
