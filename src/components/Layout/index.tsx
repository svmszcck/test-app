import React, { useMemo } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import Colors from "constants/colors";

const Layout = ({
  children,
  isLoading = false,
  hasMenu = false,
  rightIcon,
  rightAction,
  navigation,
}: LayoutProps) => {
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
        <>
          {hasMenu && (
            <View style={styles.header}>
              <TouchableOpacity
                style={{ width: 60, height: 60 }}
                onPress={() => navigation.goBack()}
              >
                <Ionicons size={30} color={colors.text} name="ios-arrow-back" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.favorite} onPress={rightAction}>
                <Ionicons size={30} name={rightIcon} />
              </TouchableOpacity>
            </View>
          )}
          {children}
        </>
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
  header: {
    flexDirection: "row",
    marginBottom: 20,
  },
  favorite: {
    marginLeft: "auto",
    width: 30,
  },
});

type LayoutProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

export default Layout;
