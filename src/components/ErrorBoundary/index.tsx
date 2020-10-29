import React, { Component, ErrorInfo } from "react";
import { View, StyleSheet } from "react-native";
import * as Updates from "expo-updates";
import { Text, Button } from "react-native-elements";

import { Theme } from "app_constants/colors";

class ErrorBoundary extends Component {
  state = {
    errorMsg: "",
  };

  static getDerivedStateFromError(error: Error) {
    return { errorMsg: error.toString() };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught error: ", error, info);
  }

  restartApp() {
    Updates.reloadAsync();
  }

  render() {
    if (this.state.errorMsg)
      return (
        <View style={styles.container}>
          <Text style={[styles.warning, { color: Theme.textBold }]}>
            Something went wrong :(
          </Text>
          <Button title="Restart App" onPress={this.restartApp} />
        </View>
      );
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  warning: {
    fontSize: 20,
    marginBottom: 40,
  },
});

export default ErrorBoundary;
