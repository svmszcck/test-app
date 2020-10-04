import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { Colors } from "constants";
import { useColorScheme } from "hooks";
import { Home, Profile, Category, MovieDetails, Favorites } from "screens";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].secondary,
        showLabel: false,
        style: {
          backgroundColor: "white",
        },
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-person" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      headerMode="none"
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <TabOneStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "Home" }}
      />
      <TabOneStack.Screen
        name="Category"
        component={Category}
        options={{ headerTitle: "Category" }}
      />
      <TabOneStack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerTitle: "MovieDetails" }}
      />
      <TabOneStack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerTitle: "Favorites" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      headerMode="none"
      screenOptions={{ headerShown: false }}
    >
      <TabTwoStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: "Profile" }}
      />
    </TabTwoStack.Navigator>
  );
}
