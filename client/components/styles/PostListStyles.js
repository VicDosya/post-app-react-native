import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  searchInput: {
    height: 50,
    fontSize: 18,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#777",
    padding: 10,
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
