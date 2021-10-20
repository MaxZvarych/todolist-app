import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    marginTop: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.385882,

    marginTop: 10,
    marginLeft: 25,

    color: "#252A31",
    opacity: 0.3,
  },
  menu: {
    position: "absolute",
    right: 15,
    bottom: 85,

    width: 200,

    elevation: 2,

    backgroundColor: "white",

    borderRadius: 10,

    flexDirection: "column",
    alignItems: "flex-start",
  },
  menu_item: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  menu_task: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    borderBottomColor: "rgba(37, 42, 49, 0.1)",
    borderBottomWidth: 1,
  },
  menu_text: {
    marginLeft: 10,
    color: "#006CFF",
  },
  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: "white",
  },
});

export default styles;
