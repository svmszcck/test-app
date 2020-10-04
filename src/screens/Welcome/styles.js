import { StyleSheet } from "react-native";
import Colors from "constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: { width: "80%", marginBottom: 30 },
  info: {
    position: "absolute",
    top: 100,
  },
  avatar: {
    alignItems: "center",
    marginBottom: 30,
  },
  warning: {
    marginTop: 20,
  },
  skip: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    top: 0,
    width: 70,
    height: 40,
  },
  skipText: {
    fontSize: 16,
  },
});
