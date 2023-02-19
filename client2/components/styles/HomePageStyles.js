import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
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
