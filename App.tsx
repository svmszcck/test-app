import React from "react";
import { LogBox, View, StyleSheet, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useCachedResources } from "hooks";
import Navigation from "router";
import setupRedux from "store";
import { isApple } from "utils/device";
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
            {isApple && (
              <View
                style={[
                  styles.iosStatusBar,
                  { backgroundColor: colors.primaryDark },
                ]}
              ></View>
            )}
            <Navigation colorScheme={colorScheme} />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  iosStatusBar: {
    height: 20,
  },
});
