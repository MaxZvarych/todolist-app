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
  detailed_list: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  close_line: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    alignSelf: "center",
  },
  header_slide_panel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 20,
  },
  header_info: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",

    marginLeft: 40,
  },
  name: {
    fontSize: 32,
    lineHeight: 41,
  },
  tasks_amount: {
    opacity: 0.7,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.458235,
  },
});

export default styles;
