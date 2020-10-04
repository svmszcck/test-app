import React, { useMemo } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { Text } from "react-native-elements";

import Colors from "constants/colors";

const Layout = ({ children, isLoading = false }: LayoutProps) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      {isLoading ? (
        <ActivityIndicator
          animating
          size="large"
          color={colors.text}
          style={styles.loading}
        />
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

type LayoutProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

export default Layout;
