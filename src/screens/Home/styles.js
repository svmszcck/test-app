import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  welcome: {
    flexDirection: "row",
    alignItems: "center",
  },
  tada: { width: 25, height: 25, marginRight: 12 },
  user: {
    fontWeight: "bold",
    flex: 1,
    flexWrap: "wrap",
  },
  favorite: {
    marginLeft: "auto",
    width: 30,
  },
  label: {
    marginBottom: 5,
    fontSize: 25,
  },
  genreContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
  },
  genreTitle: {
    fontSize: 15,
    marginTop: -5,
  },
});
