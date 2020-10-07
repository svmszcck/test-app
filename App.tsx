import React from "react";
import { NativeModules, LogBox, View, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";

import { useCachedResources } from "hooks";
import Navigation from "router";
import setupRedux from "store";
import { isApple } from "utils/device";
import { STATUS_BAR_HEIGHT } from "app_constants/ui";
import { useColor } from "hooks";

const { StatusBarManager } = NativeModules;

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
            {isApple && (
              <View
                style={{
                  height: getStatusBarHeight() || STATUS_BAR_HEIGHT,
                  backgroundColor: colors.primaryDark,
                }}
              ></View>
            )}
            <Navigation colorScheme={colorScheme} />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
