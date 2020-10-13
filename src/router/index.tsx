import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import { NotFound, Welcome } from "screens";
import { RootStackParamList, Store } from "types";
import { Routes } from "app_constants";
import { DARK } from "app_constants/ui";

import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === DARK ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const user = useSelector((state: Store) => state.user);
  const { name } = user;

  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ headerShown: false, animationEnabled: false }}
      initialRouteName={name ? Routes.ROOT : Routes.WELCOME}
    >
      <Stack.Screen name={Routes.WELCOME} component={Welcome} />
      <Stack.Screen name={Routes.ROOT} component={BottomTabNavigator} />
      <Stack.Screen
        name={Routes.NOT_FOUND}
        component={NotFound}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
