import { StyleSheet } from "react-native";

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
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  score: {
    fontSize: 26,
    marginBottom: 5,
  },
  description: {
    marginTop: 25,
  },
});
