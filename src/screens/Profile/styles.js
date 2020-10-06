import { StyleSheet } from "react-native";
import Colors from "constants/colors";

export default StyleSheet.create({
  topSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  avatar: {
    marginBottom: 20,
  },
  statItem: {
    marginBottom: 10,
  },
  searchCount: {
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action: {
    width: "48%",
  },
});
