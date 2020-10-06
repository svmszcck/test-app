import "react-native";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { Avatar } from "react-native-elements";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";

import { Welcome } from "screens";
import WelcomeView from "screens/Welcome/view";
import { store, navigation } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing Welcome Screen", () => {
  const keyboardDidShow = jest.fn();
  const selectUserImg = jest.fn();
  const setName = jest.fn();
  const saveUser = jest.fn();

  const container = (
    <Provider store={store}>
      <Welcome />
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

  it("ertert", () => {
    const wrapper = mount(container);
  });
});
