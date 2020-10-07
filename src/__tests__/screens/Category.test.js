import React from "react";
import { Provider } from "react-redux";
import { Text } from "react-native-elements";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import { Category } from "screens";
import { store, route, MockedNavigator } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing Category Screen", () => {
  const container = (
    <Provider store={store}>
      <MockedNavigator component={Category} />
    </Provider>
  );

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Category route={route} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should show the movies by the category", () => {
    const wrapper = mount(container);

    const sectionTitle = wrapper.find(Text).at(2);

    expect(sectionTitle.text()).toBe("Hehehe");
  });
});
