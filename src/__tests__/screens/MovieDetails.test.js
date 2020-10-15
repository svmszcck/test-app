import "react-native";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { Text, Tile } from "react-native-elements";
import Rating from "react-native-star-rating";
import { mount } from "enzyme";

import { Section } from "components";
import { MovieDetails } from "screens";
import { store, route, MockedNavigator } from "mocks";
import { setupEnv } from "utils/testing";

setupEnv();

describe("Testing Movie Details Screen", () => {
  let container;
  beforeEach(() => {
    container = (
      <Provider store={store}>
        <MockedNavigator component={MovieDetails} />
      </Provider>
    );
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MovieDetails route={route} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows movie details correctly", () => {
    const wrapper = mount(container);

    const genresSection = wrapper.find(Section).at(0);
    const releaseDateSection = wrapper.find(Section).at(1);
    const descriptionSection = wrapper.find(Section).at(2);

    const title = wrapper.find(Text).at(1);
    const score = wrapper.find(Text).at(2);
    const date = releaseDateSection.find(Text).at(0);
    const overview = descriptionSection.find(Text).at(1);
    const genreTiles = wrapper.find(Tile);
    const rating = wrapper.find(Rating);

    expect(genresSection.exists()).toBeTruthy();
    expect(releaseDateSection.exists()).toBeTruthy();
    expect(descriptionSection.exists()).toBeTruthy();
    expect(genreTiles.length).toBe(1);
    expect(title.text()).toBe("Rwer");
    expect(score.text()).toBe("5.6");
    expect(rating.props().rating).toBe(5.6 / 2);
    expect(date.exists()).toBeTruthy();
    expect(descriptionSection.text().includes("Blablabla hehehe")).toBeTruthy();
  });
});
