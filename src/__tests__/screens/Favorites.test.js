import React from "react";
import { Alert } from "react-native";
import { Provider } from "react-redux";
import { Text } from "react-native-elements";
import renderer from "react-test-renderer";
import { Ionicons } from "@expo/vector-icons";
import { mount } from "enzyme";

import { Favorites } from "screens";
import { store, navigation, MockedNavigator, useDispatchSpy } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing Favorites Screen", () => {
  const container = (
    <Provider store={store}>
      <MockedNavigator component={Favorites} />
    </Provider>
  );

  it("renders correctly", () => {
    const tree = renderer.create(container).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("check empty favorite list state", () => {
    const wrapper = mount(container);

    const emptyWarning = wrapper.find(Text).at(1);

    expect(emptyWarning.text()).not.toBe("Favorite list is empty :(");
  });

  it("movie should be able to removed from the list", () => {
    const wrapper = mount(container);

    const removeItem = wrapper.find(Ionicons).at(2);

    console.log(removeItem.debug());

    removeItem.props().onPress();

    expect(Alert.alert).toHaveBeenCalled();
  });
});
