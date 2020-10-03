import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useCachedResources, useColorScheme } from "hooks";
import Navigation from "router";
import setupRedux from "store";

LogBox.ignoreAllLogs(true);

const { store, persistor } = setupRedux();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={<View />} persistor={persistor}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
