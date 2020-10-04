import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { Colors } from "constants";
import { useColorScheme } from "hooks";
import {
  Home,
  Profile,
  Category,
  MovieDetails,
  Favorites,
  Search,
} from "screens";
import {
  BottomTabParamList,
  Tab1ParamList,
  Tab2ParamList,
  Tab3ParamList,
} from "types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].secondary,
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: "white",
        },
      }}
    >
      <BottomTab.Screen
        name="Tab1"
        component={Tab1Navigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Tab2"
        component={Tab2Navigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-search" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Tab3"
        component={Tab3Navigator}
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

const Tab1Stack = createStackNavigator<Tab1ParamList>();

function Tab1Navigator() {
  return (
    <Tab1Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Tab1Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "Home" }}
      />
      <Tab1Stack.Screen
        name="Category"
        component={Category}
        options={{ headerTitle: "Category" }}
      />
      <Tab1Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerTitle: "MovieDetails" }}
      />
      <Tab1Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerTitle: "Favorites" }}
      />
    </Tab1Stack.Navigator>
  );
}

const Tab2Stack = createStackNavigator<Tab2ParamList>();

function Tab2Navigator() {
  return (
    <Tab2Stack.Navigator
      headerMode="none"
      screenOptions={{ headerShown: false }}
    >
      <Tab2Stack.Screen
        name="Search"
        component={Search}
        options={{ headerTitle: "Search" }}
      />
      <Tab2Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerTitle: "MovieDetails" }}
      />
    </Tab2Stack.Navigator>
  );
}

const Tab3Stack = createStackNavigator<Tab3ParamList>();

function Tab3Navigator() {
  return (
    <Tab3Stack.Navigator
      headerMode="none"
      screenOptions={{ headerShown: false }}
    >
      <Tab3Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: "Profile" }}
      />
    </Tab3Stack.Navigator>
  );
}
