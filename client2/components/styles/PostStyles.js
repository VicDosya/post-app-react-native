import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginBottom: 10,
  },
  titleCtn: {
    flex: 1,
  },
  descriptionCtn: {
    flex: 1,
  },
  authorCtn: {
    flex: 1,
  },
  dateCtn: {
    flex: 1,
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
  },
  description: {
    fontSize: 17,
    color: "#222",
  },
  author: {
    fontSize: 16,
    marginBottom: 10,
    color: "#222",
  },
  date: {
    fontSize: 14,
    color: "#999",
  },
});
