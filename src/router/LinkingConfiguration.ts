import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Tab1: {
            screens: {
              Tab1Screen: "one",
            },
          },
          Tab2: {
            screens: {
              Tab2Screen: "two",
            },
          },
          Tab3: {
            screens: {
              Tab3Screen: "three",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
