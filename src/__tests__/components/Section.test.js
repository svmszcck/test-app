import "react-native";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Text } from "react-native-elements";

import { Section } from "components";
import { store } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing Section Component", () => {
  let container;
  beforeEach(() => {
    container = (
      <Provider store={store}>
        <Section text="Blablabla" style={{ backgroundColor: "red" }}>
          <Text>Hehehe</Text>
        </Section>
      </Provider>
    );
  });

  it("renders correctly", () => {
    const tree = renderer.create(container).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should show the elements correctly", () => {
    const wrapper = mount(container);

    const sectionTitle = wrapper.find(Text).at(0);

    expect(sectionTitle.text()).toBe("Blablabla");
  });
});
