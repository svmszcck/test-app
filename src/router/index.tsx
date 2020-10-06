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
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
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
      initialRouteName={name ? "Root" : "Welcome"}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFound}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
