import { StyleSheet } from "react-native";
import Colors from "constants/colors";

export default StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  user: {
    fontWeight: "bold",
  },
  favorite: {
    marginLeft: "auto",
    width: 30,
  },
  label: {
    marginBottom: 5,
    fontSize: 25,
  },
});
