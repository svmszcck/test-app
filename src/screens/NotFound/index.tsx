import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Routes from "app_constants/routes";
import { RootStackParamList } from "types";
import { useColor } from "hooks";

const NotFound = ({
  navigation,
}: StackScreenProps<RootStackParamList, Routes.NOT_FOUND>) => {
  const colors = useColor();
  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <Text style={styles.title}>Something went wrong :(</Text>
      <TouchableOpacity
        onPress={() => navigation.replace(Routes.ROOT)}
        style={styles.link}
      >
        <Text style={[styles.linkText, { color: colors.link }]}>
          Go to home screen!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
  },
});

export default NotFound;
