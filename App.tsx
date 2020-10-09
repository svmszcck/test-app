import React from "react";
import { LogBox, View, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";

import { useCachedResources } from "hooks";
import Navigation from "router";
import setupRedux from "store";
import { STATUS_BAR_HEIGHT } from "app_constants/ui";
import { useColor } from "hooks";

LogBox.ignoreAllLogs(true);

const { store, persistor } = setupRedux();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const colors = useColor();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={<View />} persistor={persistor}>
            <View
              style={{
                height: getStatusBarHeight() || STATUS_BAR_HEIGHT,
                backgroundColor: colors.primaryDark,
              }}
            />
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
