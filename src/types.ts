// Routing

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

// General

export type BackHandlerFunc = () => boolean | null | undefined;

// API

export type Genre {
  id: number;
  name: string;
}
