import React from "react";
import { Alert, RefreshControl, TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import { Tile } from "react-native-elements";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import { Home } from "screens";
import { store, navigation, MockedNavigator, useDispatchSpy } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing Home Screen", () => {
  let container;
  beforeEach(() => {
    container = (
      <Provider store={store}>
        <MockedNavigator component={Home} />
      </Provider>
    );
  });

  it("renders correctly", () => {
    const tree = renderer.create(container).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("show welcome msg", () => {
    const wrapper = mount(container);

    const welcomeText = wrapper.find(TouchableOpacity).at(0);

    welcomeText.props().onPress();

    expect(Alert.alert).toHaveBeenCalled();
  });

  it("show popular movie", () => {
    const wrapper = mount(container);

    const tile = wrapper.find(Tile).at(0);

    tile.props().onPress();

    expect(tile.exists()).toBeTruthy();

    expect(navigation.navigate).toHaveBeenCalled();
  });
  it("refresh the page", () => {
    const wrapper = mount(container);
    const refresh = wrapper.find(RefreshControl);
    refresh.props().onRefresh();

    expect(useDispatchSpy).toHaveBeenCalledWith();
  });
});
