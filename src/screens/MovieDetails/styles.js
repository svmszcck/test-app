import { StyleSheet } from "react-native";
import Colors from "constants/colors";

export default StyleSheet.create({
  back: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  header: {
    flexDirection: "row",
  },
  topSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  favorite: {
    marginLeft: "auto",
    width: 30,
  },
  poster: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  score: {
    fontSize: 30,
  },
  description: {
    marginTop: 25,
  },
});
