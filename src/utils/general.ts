import { CommonActions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import Routes from "app_constants/routes";

export const openLink = (link: string) => Linking.openURL(link);

export const resetNavigationState = (navigation: any) =>
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: Routes.TAB1 }],
    })
  );
