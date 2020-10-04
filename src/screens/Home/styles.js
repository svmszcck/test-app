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
  poster: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  posterContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  posterImage: {
    borderRadius: 10,
  },
  posterTitle: {
    marginTop: 5,
    fontSize: 15,
  },
  posterLoadMore: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 150,
    marginRight: 20,
  },
  posterLoadMoreTxt: {
    fontWeight: "bold",
    fontSize: 18,
  },
  label: {
    marginBottom: 5,
    fontSize: 25,
  },
});
