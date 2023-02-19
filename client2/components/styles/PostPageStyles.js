import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  lineBreak: {
    borderBottomColor: "#777",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    fontSize: 25,
  },
  description: {
    fontSize: 20,
    color: "#222",
  },
  author: {
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: 10,
    color: "#222",
    fontWeight: "bold",
    color: "gray",
  },
  date: {
    fontSize: 14,
    color: "#999",
  },
  circleButtonContainer: {
    position: "absolute",
    right: 15,
    bottom: 15,
    width: 84,
    height: 84,
    borderWidth: 4,
    borderColor: "#888",
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#008CBA",
  },
});
