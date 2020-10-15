import "react-native";
import React from "react";
import { Provider } from "react-redux";
import { Text } from "react-native-elements";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import { Profile } from "screens";
import { Section } from "components";
import { store, route, MockedNavigator } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing Profile Screen", () => {
  let container;
  beforeEach(() => {
    container = (
      <Provider store={store}>
        <MockedNavigator component={Profile} />
      </Provider>
    );
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile route={route} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should shows the statistics correctly", () => {
    const wrapper = mount(container);

    const statisticsSection = wrapper.find(Section).at(0);
    const searchCount = statisticsSection.find(Text).at(1);
    const favoriteCount = statisticsSection.find(Text).at(3);

    expect(statisticsSection.exists()).toBeTruthy();
    expect(searchCount.text()).toBe("You have searched 3 times.");
    expect(favoriteCount.text()).toBe(
      "You have added 1 movie to the favorite list."
    );
  });
});
