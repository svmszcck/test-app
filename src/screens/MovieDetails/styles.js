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
    marginBottom: 20,
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
  info: {
    marginTop: 10,
  },
  genreContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: 120,
    marginRight: 8,
  },
  genreTitle: {
    fontSize: 15,
    marginTop: -5,
  },
});
