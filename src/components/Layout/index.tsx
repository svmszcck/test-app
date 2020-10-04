import React, { useMemo } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Text } from "react-native-elements";

import Colors from "constants/colors";

const Layout = ({ children }: LayoutProps) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
});

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
